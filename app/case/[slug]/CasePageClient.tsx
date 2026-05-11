"use client";

import React, { useRef, useState, useEffect, useLayoutEffect, useMemo } from "react";
import itemsData from "../../components/data";
import { gsap } from "gsap";
import WaveBackground from "../../components/WaveBackground";
import Case3DView from "../../components/Case3DView";
import {
  startMockSocket,
  stopMockSocket,
  sendSocketMessage,
} from "../../services/mockSocket";

interface CaseItem {
  name: string;
  image: string;
}

export default function CasePageClient({ slug }: { slug: string }) {
  const slugValue = slug || "";
  const caseName = slugValue.replace("-", " ");
  const caseItems = (itemsData[slugValue] || []) as CaseItem[];
  const totalItems = caseItems.length;
  const slotW = 160;
  const slotGap = 10;
  const slotHalf = slotW / 2;
  const stripWidth = totalItems * slotW + Math.max(0, totalItems - 1) * slotGap;
  /** Centers slot 0 on the viewport line (same as the pink marker at 50%). */
  const trackPad = `calc(50% - ${slotHalf}px)`;

  const [rolling, setRolling] = useState(false);
  const [rolledItem, setRolledItem] = useState<string | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [wonIndices, setWonIndices] = useState<Set<number>>(() => new Set());

  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const markerWrapRef = useRef<HTMLDivElement>(null);
  const lastWinIndexRef = useRef<number | null>(null);

  /** Marker is visible as soon as the case page loads and before each new roll. */
  const resetMarkerVisible = () => {
    const el = markerWrapRef.current;
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.set(el, {
      x: 0,
      scaleY: 1,
      opacity: 1,
      transformOrigin: "50% 50%",
      filter: "none",
      y: 0,
    });
  };

  /** After the first roll the marker hides — it re-enters with animation, not an instant pop-in. */
  const playMarkerIn = () => {
    const el = markerWrapRef.current;
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      { x: 0, scaleY: 0.08, opacity: 0, filter: "blur(12px)", y: 12 },
      {
        x: 0,
        scaleY: 1,
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.45,
        ease: "expo.out",
      }
    );
  };

  const playMarkerOut = () => {
    const el = markerWrapRef.current;
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el, {
      x: 0,
      scaleY: 0,
      opacity: 0,
      filter: "blur(16px)",
      y: -16,
      duration: 0.55,
      ease: "power3.in",
      onComplete: () => {
        gsap.set(el, { x: 0, y: 0, filter: "none", scaleY: 0.06, opacity: 0 });
      },
    });
  };

  useLayoutEffect(() => {
    resetMarkerVisible();
    lastWinIndexRef.current = null;
    setWonIndices(new Set());
    const strip = sliderRef.current;
    if (strip) {
      gsap.killTweensOf(strip);
      gsap.set(strip, { x: 0 });
    }
  }, [slugValue]);

  const availableCount = useMemo(
    () => caseItems.map((_, i) => i).filter((i) => !wonIndices.has(i)).length,
    [caseItems, wonIndices]
  );
  const allUnlocked = totalItems > 0 && availableCount === 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slugValue]);

  useEffect(() => {
    const handleMessage = (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    };
    startMockSocket(handleMessage);
    return () => {
      stopMockSocket();
    };
  }, []);

  const setItemRef = (el: HTMLDivElement | null, index: number) => {
    if (el) itemRefs.current[index] = el;
  };

  const handleOpenCase = () => {
    if (rolling || totalItems === 0 || availableCount === 0) return;
    setRolling(true);
    setRolledItem(null);

    const prevWin = lastWinIndexRef.current;
    if (prevWin !== null) {
      const prevEl = itemRefs.current[prevWin];
      if (prevEl) gsap.set(prevEl, { clearProps: "all" });
    }

    const isFirstRoll = lastWinIndexRef.current === null;
    if (isFirstRoll) {
      resetMarkerVisible();
    } else {
      playMarkerIn();
    }

    const pool = caseItems.map((_, i) => i).filter((i) => !wonIndices.has(i));
    const randomIndex = pool[Math.floor(Math.random() * pool.length)];

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const chosenSlotEl = itemRefs.current[randomIndex];
        const sliderElLocal = sliderRef.current;
        const containerEl = containerRef.current;
        if (!chosenSlotEl || !sliderElLocal || !containerEl) {
          playMarkerOut();
          setRolling(false);
          return;
        }

        gsap.killTweensOf(sliderElLocal);

        let startX = (gsap.getProperty(sliderElLocal, "x") as number) || 0;
        if (isFirstRoll) {
          gsap.set(sliderElLocal, { x: 0 });
          startX = 0;
          void containerEl.offsetHeight;
        }

        const chosenRect = chosenSlotEl.getBoundingClientRect();
        const chosenCenter = chosenRect.left + chosenRect.width / 2;
        const containerRect = containerEl.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        const delta = containerCenter - chosenCenter;
        const targetX = startX + delta;
        const kickX = startX + delta * 0.06;

        const tl = gsap.timeline();
        const onRollDone = () => {
            lastWinIndexRef.current = randomIndex;
            setWonIndices((prev) => new Set([...prev, randomIndex]));
            playMarkerOut();
            setRolling(false);
            const chosenItem = caseItems[randomIndex];
            setRolledItem(chosenItem.image);

            gsap.to(chosenSlotEl, {
              duration: 0.65,
              borderRadius: 8,
              backgroundColor: "rgba(255, 0, 255, 0.1)",
              border: "2px solid #ff66ff",
              boxShadow: "0 0 20px 5px #ff66ff",
              ease: "power2.out",
            });

            sendSocketMessage(`New item ${chosenItem.name} unlocked!`);
        };

        if (isFirstRoll) {
          tl.to(sliderElLocal, {
            x: targetX,
            duration: 4.45,
            ease: "power3.inOut",
            onComplete: onRollDone,
          });
        } else {
          tl.to(sliderElLocal, {
            x: kickX,
            duration: 0.22,
            ease: "power2.out",
          }).to(sliderElLocal, {
            x: targetX,
            duration: 4.35,
            ease: "power3.inOut",
            onComplete: onRollDone,
          });
        }
      });
    });
  };

  return (
    <div className="isolate bg-gray-900 text-white min-h-screen relative">
      <WaveBackground />

      <div className="relative z-10 flex flex-col items-center w-full max-w-[1600px] mx-auto px-3 pb-10">
        <div className="w-full max-w-[800px] my-2" key={slugValue}>
          <Case3DView
            rolledItem={rolledItem || undefined}
            showRolledItem={!!rolledItem}
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-4 text-center">
          {caseName} potential items
        </h1>

        <div
          ref={containerRef}
          className="w-full max-w-[1600px] h-[120px] relative border-2 border-purple-500 rounded-lg mb-6 shadow-lg overflow-hidden"
          style={{ backgroundColor: "#1c1f2a" }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 flex w-7 -translate-x-1/2 justify-center">
            <div
              ref={markerWrapRef}
              className={`case-drop-marker-stack ${rolling ? "case-drop-marker-stack--rolling" : ""}`}
            >
              <div className="case-drop-marker-glow" aria-hidden />
              <div className="case-drop-marker-core" aria-hidden />
            </div>
          </div>

          <div
            className="absolute inset-0 box-border"
            style={{ paddingLeft: trackPad, paddingRight: trackPad }}
          >
            <div
              ref={sliderRef}
              className="absolute left-0 top-0 h-full flex items-center gap-[10px]"
              style={{ width: stripWidth }}
            >
              {caseItems.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => setItemRef(el, i)}
                  className="flex shrink-0 items-center justify-center relative"
                  style={{
                    width: slotW,
                    height: "100%",
                    borderRadius: 8,
                    padding: "8px 0",
                    backgroundColor: "#2c2f3a",
                    boxSizing: "border-box",
                  }}
                >
                  <div className="absolute inset-0 opacity-20" />
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ maxHeight: "80%", maxWidth: "80%" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleOpenCase}
          disabled={rolling || allUnlocked || totalItems === 0}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-lg font-bold active:scale-95"
        >
          {rolling
            ? "Rolling..."
            : allUnlocked
              ? "All items already revealed"
              : "Open case"}
        </button>

        <div className="mt-4">
          {messages.map((msg, idx) => (
            <div key={idx} data-testid="socket-message">
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
