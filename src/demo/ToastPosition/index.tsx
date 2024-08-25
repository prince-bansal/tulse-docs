import { useState } from "react";
import { getPositionCode } from "../../utils/constants";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { toastPosition } from "../../types/Toast";
import Code from "../../components/Code";
import Divider from "../../components/Divider";
// import ToastProvider from "../../ToastProvider";

const ToastPosition = () => {
  const [position, setPosition] = useState<toastPosition>("right-bottom");

  return (
    <>
      <Heading>Toast Position</Heading>
      <div className="m-auto h-full">
        <Button onClick={() => setPosition("left-top")}>Left Top</Button>
        <Button onClick={() => setPosition("left-bottom")}>Left Bottom</Button>
        <Button onClick={() => setPosition("right-top")}>Right top</Button>
        <Button onClick={() => setPosition("right-bottom")}>
          Right bottom
        </Button>
      </div>
      {/* <ToastProvider richColors position={position} duration={2000} /> */}

      <Code heading="Toaster" code={getPositionCode(position)} />
      <Divider />
    </>
  );
};

export default ToastPosition;
