import React, { useState } from "react";
import {
  CheckCircle,
  Copy,
  Scissors,
  Clipboard,
  Trash2,
  Type,
  ToggleLeft,
  RotateCcw,
} from "lucide-react";

function TextUtils() {
  const [inputText, setInputText] = useState("");

  // Reusable button style class
  const buttonClass =
    "cursor-pointer bg-stone-100 text-stone-950 hover:bg-stone-300 px-4 rounded-sm flex items-center";

  const handleClear = () => {
    setInputText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(inputText);
  };

  const handleCut = () => {
    navigator.clipboard.writeText(inputText);
    setInputText("");
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then((text) => {
      setInputText(text);
    });
  };

  const handleToUpperCase = () => {
    setInputText((prevText) => prevText.toUpperCase());
  };

  const handleToLowerCase = () => {
    setInputText((prevText) => prevText.toLowerCase());
  };

  const handleRemovePunctuations = () => {
    setInputText((prevText) => prevText.replace(/[^\w\s]|_/g, ""));
  };

  const handleRemoveNumbers = () => {
    setInputText((prevText) => prevText.replace(/[\d]/g, ""));
  };

  const handleToggleCase = () => {
    setInputText((prevText) =>
      prevText
        .split("")
        .map((char) =>
          char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        )
        .join("")
    );
  };

  const handleReverseText = () => {
    setInputText((prevText) => prevText.split("").reverse().join(""));
  };

  return (
    <div
      id="container"
      className="h-screen flex flex-col items-center justify-center text-white "
    >
      <div className="bg-stone-100/5 p-10 rounded-lg">
        <label htmlFor="inputText" className="mb-2">
          TextUtils
        </label>
        <br />
        <input
          type="text"
          name="inputText"
          id="inputText"
          className="bg-transparent border border-gray-400 text-wrap w-full mb-4 px-2 rounded-sm h-8"
          placeholder="Enter Text To MOD"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <button className={buttonClass} onClick={handleCut}>
            <Scissors className="h-4" /> Cut
          </button>
          <button className={buttonClass} onClick={handleCopy}>
            <Copy className="h-4" Copy /> Copy
          </button>
          <button className={buttonClass} onClick={handlePaste}>
            <Clipboard className="h-4" /> Paste
          </button>
          <button className={buttonClass} onClick={handleClear}>
            <Trash2 className="h-4" /> Clear
          </button>
        </div>

        {/* Transformation Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button className={buttonClass} onClick={handleToUpperCase}>
            Upper Case
          </button>
          <button className={buttonClass} onClick={handleToLowerCase}>
            Lower Case
          </button>
          <button className={buttonClass} onClick={handleRemovePunctuations}>
            Remove Punctuations
          </button>
          <button className={buttonClass} onClick={handleRemoveNumbers}>
            Remove Numbers
          </button>
          <button className={buttonClass} onClick={handleToggleCase}>
            Toggle Case
          </button>
          <button className={buttonClass} onClick={handleReverseText}>
            Reverse Text
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextUtils;