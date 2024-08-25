import Code from "../../components/Code";
import Divider from "../../components/Divider";
import Heading from "../../components/Heading";
import { getInstallationCode } from "../../utils/constants";

const Installation = () => {
  return (
    <>
      <Heading>Installation</Heading>
      <Code heading="Installation" code={getInstallationCode()} />
      <Divider />
    </>
  );
};

export default Installation;
