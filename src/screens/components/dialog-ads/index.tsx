import Portal from "@/components/portal";
import { DialogBackground, DialogBody, DialogContent, DialogWrapper } from "@/styles";
import { Flex } from "@/styles/common";
import { ButtonIcon, DialogBodyContent, DialogThanksWrapper } from "./styled";
import SvgRender from "./banner";

const DialogAds = ({ showModal, setShowModal }: any) => {
  if (!showModal) {
    return null;
  }

  return (
    <Portal>
      <DialogThanksWrapper>
        <DialogWrapper>
          <DialogBackground onClick={() => setShowModal(false)} />
          <DialogContent>
            <ButtonIcon style={{ background: "" }} className="hide-mobile" onClick={() => setShowModal(false)}>
              {/* <Icons icon="close" color="#E87722" /> */}
            </ButtonIcon>

            <DialogBody>
              <DialogBodyContent className="p-24">
                <Flex className="w-full" justify="space-between">
                  <img src={`${process.env.basePath}/img/modal-left.png`} alt="" className="modal-left custom-prev" />
                  <SvgRender />
                </Flex>
              </DialogBodyContent>
            </DialogBody>
          </DialogContent>
        </DialogWrapper>
      </DialogThanksWrapper>
    </Portal>
  );
};

export default DialogAds;
