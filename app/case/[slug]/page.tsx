"use client";

import React, { useRef, useState, useEffect } from "react";
import { useParams } from "next/navigation";
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

export default function CasePage() {
  const params = useParams();

  const rawSlug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || "");
  const slugValue = rawSlug || "";

  const caseName = slugValue.replace("-", " ");

  const caseItems = (itemsData[slugValue] || []) as CaseItem[];
  const totalItems = caseItems.length;

  const caseImage =
    totalItems > 0
      ? caseItems[0].image
      : "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/crate.gif";

  const [rolling, setRolling] = useState(false);
  const [rolledItem, setRolledItem] = useState<string | null>(null);

  const [messages, setMessages] = useState<string[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

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
    if (el) {
      itemRefs.current[index] = el;
    }
  };

  const handleOpenCase = () => {
    if (rolling || totalItems === 0) return;
    setRolling(true);
    setRolledItem(null);

    itemRefs.current.forEach((slot) => {
      gsap.set(slot, { clearProps: "all" });
    });

    const randomIndex = Math.floor(Math.random() * totalItems);

    requestAnimationFrame(() => {
      const chosenSlotEl = itemRefs.current[randomIndex];
      const sliderElLocal = sliderRef.current;
      const containerEl = containerRef.current;
      if (!chosenSlotEl || !sliderElLocal || !containerEl) {
        setRolling(false);
        return;
      }

      const chosenRect = chosenSlotEl.getBoundingClientRect();
      const chosenCenter = chosenRect.left + chosenRect.width / 2;
      const containerRect = containerEl.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      const currentX = (gsap.getProperty(sliderElLocal, "x") as number) || 0;
      const offset = containerCenter - chosenCenter + currentX;

      gsap.to(sliderElLocal, {
        duration: 4,
        x: offset,
        ease: "power2.inOut",
        onComplete: () => {
          setRolling(false);

          const chosenItem = caseItems[randomIndex];
          setRolledItem(chosenItem.image);

          gsap.to(chosenSlotEl, {
            duration: 0.6,
            borderRadius: 8,
            backgroundColor: "rgba(255, 0, 255, 0.1)",
            border: "2px solid #ff66ff",
            boxShadow: "0 0 20px 5px #ff66ff",
            ease: "power2.out",
          });

          const itemName = chosenItem.name;
          sendSocketMessage(`New item ${itemName} unlocked!`);
        },
      });
    });
  };

  return (
    <div className="bg-gray-900 text-white flex flex-col items-center min-h-screen relative">
      <WaveBackground />

      <div className="w-full max-w-[800px] my-2 z-0" key={slugValue}>
        <Case3DView
          textureUrl={caseImage}
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
        <div
          className="absolute top-0 bottom-0 w-px bg-pink-500 z-10"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        />

        <div
          ref={sliderRef}
          className="absolute left-0 top-0 h-full flex items-center"
          style={{ width: totalItems * 160 }}
        >
          {caseItems.map((item, i) => (
            <div
              key={i}
              ref={(el) => setItemRef(el, i)}
              className="flex items-center justify-center relative"
              style={{
                width: 160,
                height: "100%",
                borderRadius: 8,
                padding: "8px 0",
                backgroundColor: "#2c2f3a",
                margin: 0,
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

      <button
        onClick={handleOpenCase}
        disabled={rolling}
        className="px-6 py-3 bg-purple-600 hover:bg-purple-500 transition-colors rounded-lg font-bold active:scale-95"
      >
        {rolling ? "Rolling..." : "Open case"}
      </button>

      <div className="mt-4">
        {messages.map((msg, idx) => (
          <div key={idx} data-testid="socket-message">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}