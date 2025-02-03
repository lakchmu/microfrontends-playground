import React, { useState } from "react";

import Button from "../shared/button";

import { excusesList } from "../data/data-excuses-list.en";
import { excuseButtonLabels } from "../data/data-excuses-button-labels.en";

export default function ExcuseGenerator() {
  const [excuse, setExcuse] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Get excuse");

  const getRandomExcuse = () => {
    const randomListIndex = Math.floor(Math.random() * excusesList.length);
    const randomButtonIndex = Math.floor(Math.random() * excuseButtonLabels.length);
    setExcuse(excusesList[randomListIndex]);
    setButtonLabel(excuseButtonLabels[randomButtonIndex]);
  };

  return (
    <div className="grid grow h-full">
      <div className="grid grid-rows-3 gap-4 place-items-center place-self-center">
        <h1 className="text-3xl text-teal-600">Excuse Generator</h1>
        <p className="text-gray-800">
          {excuse ? excuse : "Click the button to get the excuse!"}
        </p>
        <button
          className="bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded shadow-md"
          onClick={getRandomExcuse}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
