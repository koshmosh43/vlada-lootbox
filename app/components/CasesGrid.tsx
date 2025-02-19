"use client";

import React from "react";

interface CaseItem {
  slug: string;
  name: string;
  price: string;
  image: string;
}

const casesData: CaseItem[] = [
  {
    slug: "ember-case",
    name: "Ember Case",
    price: "$3.00",
    image: "https://media.csgo-skins.com/container/116.png",
  },
  {
    slug: "neon-case",
    name: "Neon Case",
    price: "$2.00",
    image: "https://media.csgo-skins.com/container/113.png",
  },
  {
    slug: "plague-case",
    name: "Plague Case",
    price: "$2.00",
    image: "https://media.csgo-skins.com/container/115.png",
  },
  {
    slug: "toolbox-case",
    name: "Toolbox Case",
    price: "$3.00",
    image: "https://media.csgo-skins.com/container/toolbox-case.png",
  },
  {
    slug: "lovely-case",
    name: "Lovely Case",
    price: "$2.50",
    image: "https://media.csgo-skins.com/container/24.png",
  },
  {
    slug: "steampunk-case",
    name: "Steampunk Case",
    price: "$2.50",
    image: "https://media.csgo-skins.com/container/steampunk-case.png",
  },
  {
    slug: "gigabula-case",
    name: "GigaBula Case",
    price: "$4.00",
    image: "https://media.csgo-skins.com/container/giga-bula-case.png",
  },
  {
    slug: "striking-ninja-case",
    name: "Striking Ninja Case",
    price: "$2.50",
    image: "https://media.csgo-skins.com/container/79.png",
  },
];

const CasesGrid: React.FC = () => {
  const handleClick = (slug: string) => {
    window.location.href = `/case/${slug}`;
  };

  return (
    <div className="w-full flex justify-center mt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {casesData.map((item) => (
          <div
            key={item.slug}
            className="neon-card w-48 h-64 cursor-pointer"
            onClick={() => handleClick(item.slug)}
          >
            <div className="neon-card-content flex flex-col items-center">
              <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.name}</h3>
            </div>
            <div className="price-badge">
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasesGrid;