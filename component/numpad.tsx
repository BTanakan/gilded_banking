import React from "react";


interface NumpadProps {
  onDigitClick: (digit: string) => void;
  onBackspace: () => void;
}

const Numpad = ({ onDigitClick, onBackspace }: NumpadProps) => {
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  return (
    // w-full max-w-sm mx-auto 
    <div className="w-full max-w-sm mx-auto ">
      <div className=" grid grid-cols-3 bg-blue-500">
      {digits.map((digit) => (
          <button
            key={digit}
            className="py-4 text-3xl font-medium text-center text-gray-700 "
            onClick={() => onDigitClick(digit)}
          >
            {digit}
          </button>
        ))}
        <button
          className="py-4 text-3xl font-medium text-center text-gray-700 "
          onClick={onBackspace}
        >
         
        </button>
      </div>
      {/* <div className="grid grid-cols-3 gap-4 border-8">
        {digits.map((digit) => (
          <button
            key={digit}
            className="py-4 text-3xl font-medium text-center text-gray-700 "
            onClick={() => onDigitClick(digit)}
          >
            {digit}
          </button>
        ))}
        <button
          className="py-4 text-3xl font-medium text-center text-gray-700 "
          onClick={onBackspace}
        >
         
        </button>
      </div> */}
    </div>
  );
};

export default Numpad;