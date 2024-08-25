import { useState } from "react";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Code from "../../components/Code";
import Divider from "../../components/Divider";
import { getDismissibleCode } from "../../utils/constants";

const DismissibleToast = () => {
  const [isDismissible, setIsDismissible] = useState<boolean>(false);

  return (
    <>
      <Heading>Dismissible</Heading>
      <Button onClick={() => setIsDismissible((prev) => !prev)}>
        {isDismissible ? "Undismissible" : "Dismissible"}
      </Button>
      <Code heading="Dismissible" code={getDismissibleCode(isDismissible)} />
      <Divider />
    </>
  );
};

export default DismissibleToast;
