import React, { useCallback, useEffect, useState } from "react";
import copyIcon from "../../assets/copyIcon.svg";

function PasswordGenerator() {
  const [Char, setChar] = useState(false);
  const [Num, setNum] = useState(false);
  const [len, setlen] = useState(3);
  const [pass, setPass] = useState("edit input to generate");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    window.navigator.clipboard.writeText(pass);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const getPass = useCallback(() => {
    const set =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" +
      (Char ? "!@#$%^&*()_+{}[];':" : "") +
      (Num ? "123456890" : "");
    let newPass = "";
    for (let index = 0; index < len; index++) {
      let random = Math.floor(Math.random() * set.length);
      let c = set[random];
      newPass += c;
    }
    setPass(newPass);
  }, [len, Char, Num]);
  useEffect(() => {
    getPass();
  }, [len, Char, Num, getPass]);
  //Note: it can also work without useCallback if we remove 'getPass' from dependency array of useEffect
  return (
    <div className="h-screen flex justify-center items-center relative">
      <h1 className="absolute text-white max-sm:text-3xl sm:text-8xl text-5xl top-12">
        PASSWORD GENERATOR 🎲
      </h1>
      <div className="bg-stone-100/10 rounded-lg p-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-nowrap">
            <input
              className="rounded-s-md max-md:w-40 max-lg:w-60 w-80 text-right px-1 "
              type="text"
              value={pass}
              readOnly
            />
            <button
              onClick={handleCopy}
              className={`${
                copied ? "bg-green-500" : "bg-blue-600"
              } text-white max-md:w-20 w-32 rounded-e-md select-none flex justify-center items-center transition-colors duration-300`}
            >
              <img src={copyIcon} alt="Copy Icon" className="w-5" />
              {copied && <span className="ml-2">Copied</span>}
            </button>
          </div>
          <div className="mt-4 max-md:flex max-md:flex-col">
            <input
              type="range"
              name="length"
              id="length"
              value={len}
              min={3}
              max={15}
              onChange={(e) => {
                setlen(parseInt(e.target.value));
              }}
            />
            <span>
              <span className="text-white select-none">
                <input
                  className=" ms-4 me-2"
                  type="checkbox"
                  name="spcChar"
                  id="spcChar"
                  onClick={(e) => {
                    setChar((p) => !p);
                  }}
                />
                <label htmlFor="spcChar">🔣</label>
              </span>
              <span className="text-white select-none">
                <input
                  className=" ms-4 me-2"
                  type="checkbox"
                  name="num"
                  id="num"
                  onClick={(e) => {
                    setNum((p) => !p);
                  }}
                />
                <label htmlFor="num">🔢</label>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
