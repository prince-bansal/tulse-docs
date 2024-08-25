import "../App.css";

import BasicUsage from "./BasicUsage";
import DismissibleToast from "./DismissibleToast";
import Hero from "./Hero";
import Installation from "./Installation";
import RichColorToast from "./RichColorToast";
import ToastPosition from "./ToastPosition";
import ToastTypes from "./ToastTypes";

const Demo = () => {
  return (
    <div className="min-h-screen relative  text-[#262831] font-montserrat">
      <div className="w-[50%] p-10 py-20 h-full m-auto">
        <Hero />

        <Installation />

        <BasicUsage />

        <ToastTypes />

        <ToastPosition />

        <DismissibleToast />

        <RichColorToast />
      </div>
    </div>
  );
};

export default Demo;
