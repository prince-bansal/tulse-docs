import { useState } from "react";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Code from "../../components/Code";
import Divider from "../../components/Divider";
import { getRichColorsCode } from "../../utils/constants";

const RichColorToast = () => {
  const [isRichColors, setIsRichColors] = useState<boolean>(false);

  return (
    <>
      <Heading>Rich Colors</Heading>
      <Button onClick={() => setIsRichColors((prev) => !prev)}>
        {isRichColors ? "Disable Rich Colors" : "Enable Rich Colors"}
      </Button>
      <Code heading="Rich Colors" code={getRichColorsCode(isRichColors)} />
      <Divider />
    </>
  );
};

export default RichColorToast;
