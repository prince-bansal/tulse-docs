import Code from "../../components/Code";
import Divider from "../../components/Divider";
import Heading from "../../components/Heading";
import { getBasicUsageCode } from "../../utils/constants";

const BasicUsage = () => {
  return (
    <>
      <Heading>Basic Usage</Heading>
      <Code heading="Basic Usage" code={getBasicUsageCode()} />

      <Divider />
    </>
  );
};

export default BasicUsage;
