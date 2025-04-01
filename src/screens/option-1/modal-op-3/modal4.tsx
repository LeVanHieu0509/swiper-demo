import Portal from "@/components/portal";
import { DialogBackground, DialogBody, DialogContent, DialogWrapper } from "@/styles";
import { Flex } from "@/styles/common";
import Icons from "@/components/icons";
import { DialogThanksWrapper } from "@/screens/components/dialog-ads/styled";

const Modal4 = ({ showModal, setShowModal }: any) => {
  if (!showModal) {
    return null;
  }

  return (
    <Portal>
      <DialogThanksWrapper>123</DialogThanksWrapper>
    </Portal>
  );
};

export default Modal4;
