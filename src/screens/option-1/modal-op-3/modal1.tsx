import Portal from "@/components/portal";
import { DialogBackground, DialogBody, DialogContent, DialogWrapper } from "@/styles";
import { Flex } from "@/styles/common";
import Icons from "@/components/icons";
import {
  DialogThanksWrapper,
  ButtonAds,
  ButtonAdsWrapper,
  ButtonIcon,
  DialogBodyContent,
} from "@/screens/components/dialog-ads/styled";
import { useState } from "react";
import Modal3 from "./modal3";
import SvgRender from "@/screens/components/dialog-ads/banner";

const Modal1 = ({ showModal, setShowModal }: any) => {
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [t, setT] = useState(0);

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
                setOpen3(false);
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
                <div
                  className="open"
                  onClick={() => {
                    setOpen2(true);
                    setT(1);
                  }}
                ></div>
                <div
                  className="open2"
                  style={{
                    position: "absolute",
                    right: "-294px",
                    top: "-9px",
                    transform: open2 ? "translateX(-50%)" : open3 ? "translateX(-150%)" : "translateX(0px)",
                    opacity: open2 ? 1 : open3 ? 1 : 0,
                    visibility: open2 ? "visible" : "hidden",
                    zIndex: open2 ? 100 : -1,
                    transition: "all ease-in 0.45s",
                  }}
                >
                  <img
                    src={`${process.env.basePath}/img/op3-modal-2.png`}
                    alt=""
                    style={{
                      height: 920,
                    }}
                  />
                  <div
                    style={{
                      width: "30px",
                      height: "60px",
                      position: "absolute",
                      top: "230px",
                      cursor: "pointer",
                      right: "50px",
                    }}
                    onClick={() => {
                      setOpen3(true);
                      setT(2);

                      setOpen2(false);
                    }}
                  ></div>
                </div>
                <div
                  className="open3"
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "0",
                    background: "#fff",
                    transform: open3 ? "translateX(0)" : "translateX(50%)",
                    // opacity: open3 ? 1 : 0,
                    borderRadius: "40px",
                    visibility: open3 ? "visible" : "hidden",
                    zIndex: open3 ? 100 : -1,
                    transition: "all ease-in 0.45s",
                    transitionDelay: "0.2s",
                    width: "100%",
                    height: "100%",
                    padding: "32px",
                  }}
                >
                  <Flex className="w-full" justify="space-between">
                    <img
                      src={`${process.env.basePath}/img/left-m2-op3.png`}
                      alt=""
                      style={{
                        width: "auto",
                      }}
                    />
                    <div
                      className="svgg"
                      style={{
                        position: "relative",
                      }}
                      key={t}
                    >
                      <img
                        src={`${process.env.basePath}/img/op3-m1.png`}
                        alt=""
                        style={{
                          width: "auto",
                        }}
                        className="m1"
                      />
                      <img
                        src={`${process.env.basePath}/img/op3-m2.png`}
                        alt=""
                        style={{
                          width: "auto",
                        }}
                        className="m2"
                      />{" "}
                      <img
                        src={`${process.env.basePath}/img/op3-m3.png`}
                        alt=""
                        style={{
                          width: "auto",
                        }}
                        className="m3"
                      />{" "}
                      <img
                        src={`${process.env.basePath}/img/op3-m4.png`}
                        alt=""
                        style={{
                          width: "auto",
                        }}
                        className="m4"
                      />{" "}
                      <img
                        src={`${process.env.basePath}/img/op3-m5.png`}
                        alt=""
                        style={{
                          width: "auto",
                        }}
                        className="m5"
                      />{" "}
                      <img
                        src={`${process.env.basePath}/img/op3-m6.png`}
                        alt=""
                        style={{
                          width: "auto",
                        }}
                        className="m6"
                      />
                      <img
                        src={`${process.env.basePath}/img/fwd.png`}
                        alt=""
                        style={{
                          width: "auto",
                        }}
                        className="fwd"
                      />
                    </div>
                  </Flex>
                  <img
                    src={`${process.env.basePath}/img/bottom-m2-op3.png`}
                    alt=""
                    style={{
                      borderRadius: "0px",
                      marginTop: "250px",
                    }}
                  />
                </div>
              </DialogBodyContent>
            </DialogBody>
          </DialogContent>
        </DialogWrapper>
      </DialogThanksWrapper>
    </Portal>
  );
};

export default Modal1;
