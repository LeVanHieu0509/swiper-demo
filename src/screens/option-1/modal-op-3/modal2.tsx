import Portal from "@/components/portal";
import { DialogBackground, DialogBody, DialogContent, DialogWrapper } from "@/styles";
import { Flex } from "@/styles/common";
import Icons from "@/components/icons";
import { DialogThanksWrapper, ButtonAds, ButtonAdsWrapper, ButtonIcon, DialogBodyContent } from "./styled";
import { useState } from "react";

const Modal2 = ({ showModal, setShowModal, setShowModal3 }: any) => {
  const [open2, setOpen2] = useState(false);
  if (!showModal) {
    return null;
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <Portal>
      <DialogThanksWrapper>
        <DialogWrapper>
          <DialogBackground onClick={() => setShowModal(false)} />
          <DialogContent>
            <ButtonIcon
              style={{ background: "" }}
              className="hide-mobile"
              onClick={() => {
                setShowModal(false);
                setOpen2(false);
              }}
            >
              <Icons icon="close" color="#E87722" />
            </ButtonIcon>

            <DialogBody>
              <DialogBodyContent className="p-2">
                <img
                  src={`${process.env.basePath}/img/op3-modal-1-1.jpg`}
                  alt=""
                  style={{
                    filter: open2 ? "blur(2px)" : "blur(0px)",
                    transition: "all ease-in 0.05s",
                    transitionDelay: "0.25s",
                  }}
                />
              </DialogBodyContent>
            </DialogBody>
          </DialogContent>
        </DialogWrapper>
      </DialogThanksWrapper>
    </Portal>
  );
};

export default Modal2;
