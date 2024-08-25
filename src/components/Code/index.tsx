import { FC, useEffect, useState } from "react";
import Copy from "/copy.svg";
import Check from "/check.svg";

type CodeProps = {
  code: string;
  heading: string;
};

const Code: FC<CodeProps> = ({ code, heading }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!isCopied) return;
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }, [isCopied]);

  const copyToClipboard = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="my-4">
      <p className="text-black mb-1">{heading}</p>
      <div className="border shadow-inner flex  justify-between items-start rounded-md text-sm border-gray-200 bg-gray-100 text-gray-600 p-2">
        <pre>
          <code>{code}</code>
        </pre>
        {!isCopied ? (
          <button onClick={copyToClipboard} className="cursor-pointer">
            <img className="w-4 h-6" src={Copy} alt="" />
          </button>
        ) : (
          <img className="w-6 h-6" src={Check} alt="" />
        )}
      </div>
    </div>
  );
};

export default Code;
