"use client";

import Card from "@/app/components/Card";
import Create from "@/app/components/Modal/Create";
import { useState, useEffect } from "react";
import { ICard } from "../Card";

export default function CardContainer() {
  const [addCard, setAddCard] = useState<ICard[]>([]);
  const [cardDatas, setcardDatas] = useState<ICard[]>([]);

  useEffect(() => {
    if (localStorage.getItem("cardName")) {
      const getName = localStorage.getItem("cardName");
      if (getName) {
        setcardDatas(JSON.parse(getName));
      }
    }
  }, []);

  const handleGetValue = (value: string) => {
    let newArray = [...addCard];
    newArray.push({ name: value });
    setAddCard(newArray);
    const setCardName = localStorage.setItem(
      "cardName",
      JSON.stringify(newArray)
    );
  };

  return (
    <div className="bg-blue-200 rounded-md p-2">
      <header>Project Name</header>
      <div className="w-64">
        <div className="flex justify-between">
          <div>Title</div>
          <div>...</div>
        </div>
        {cardDatas.map((cardData) => (
          <div key={cardData.name}>
            <Card>{cardData?.name}</Card>
          </div>
        ))}
      </div>
      <Create onCreate={(value) => handleGetValue(value)} />
    </div>
  );
}
