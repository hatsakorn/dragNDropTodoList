"use client";

import React, { useState } from "react";
import { ICreate } from "@/app/Interfaces/components/Create";

export default function Create(props: ICreate) {
  const { onCreate = () => {} } = props;
  const [isClick, setIsClick] = useState<boolean>(false);
  const [titleName, setTitleName] = useState<string>("");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleName(e.target.value);
  };

  const handleCreate = () => {
    onCreate(titleName);
    setIsClick(false);
  };

  return (
    <div>
      {isClick ? (
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter name of a card."
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="flex gap-2">
            <button
              className="p-1 m-1 rounded-md bg-blue-400"
              onClick={() => handleCreate()}
            >
              Add Card
            </button>
            <button onClick={() => setIsClick(false)}>X</button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between w-64">
          <button
            className=" rounded-md grow active:bg-blue-600"
            onClick={() => handleClick()}
          >
            <div className="flex gap-2">
              <div>+</div>
              <div>Add a Card</div>
            </div>
          </button>
          <button className="p-2 active:bg-blue-600">I</button>
        </div>
      )}
    </div>
  );
}
