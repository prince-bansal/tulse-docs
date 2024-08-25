import { useState } from "react";
import { ToastType } from "../../types/Toast";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Code from "../../components/Code";
import Divider from "../../components/Divider";
import { getSampleCode } from "../../utils/constants";

const ToastTypes = () => {
  const [selectedType, setSelectedType] = useState<ToastType>("success");

  const makeApiCall = (type: ToastType) => {
    switch (type) {
      case "success":
        setSelectedType("success");
        // toast.success("Success", "Details saved successfully");
        break;
      case "warning":
        setSelectedType("warning");
        // toast.warning("Warning", "Please be careful");
        break;
      case "error":
        setSelectedType("error");
        // toast.error("Unauthorized", "You don't have permissions");
        break;
      case "info":
        setSelectedType("info");
        // toast.info("Confirmation", "Are you sure?");
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Heading>Toast Types</Heading>
      <div className="m-auto h-full">
        <Button onClick={() => makeApiCall("success")}>Success</Button>
        <Button onClick={() => makeApiCall("error")}>Error</Button>
        <Button onClick={() => makeApiCall("info")}>Info</Button>
        <Button onClick={() => makeApiCall("warning")}>Warning</Button>
      </div>

      <Code heading="Toast Types" code={getSampleCode(selectedType)} />
      <Divider />
    </>
  );
};

export default ToastTypes;
