import { DialogBody, DialogContent } from "@/styles";
import { device } from "@/styles/media";
import styled, { css, keyframes } from "styled-components";

const popEffect = keyframes`
 0% {
    transform: translateX(100%);
    opacity: 0;
  }
 
  100% {
   transform: translateX(0%);
    opacity: 1;
  }
`;

export const DialogBodyContent = styled.div`
  background: #ffffff !important;
  border-radius: 40px;

  .open {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 45px;
    right: 90px;
    height: 25px;
    width: 120px;
    /* background: red; */
    cursor: pointer;
  }

  @media ${device.mobile} {
    position: relative;
    max-width: 343px;
  }

  @media (max-width: 350px) {
    position: relative;
    max-width: 260px;
  }
`;

export const DialogThanksWrapper = styled.div`
  padding: 24px;

  .modal-left {
    width: 440px;
    height: 650px;
  }
  .${DialogContent.styledComponentId} {
    z-index: 100;
    background: #ffffff !important;
    animation: ${popEffect} 0.8s linear forwards;

    width: 730px;
    padding: 0;

    @media ${device.mobile} {
      width: 343px;

      background: unset;
    }

    @media (max-height: 1000px) {
      position: relative;
      max-width: 600px;
    }

    @media (max-height: 700px) {
      position: relative;
      max-width: 400px;
    }

    @media (max-height: 450px) {
      position: relative;
      max-width: 200px;
    }

    img {
      border-radius: 16px;
      width: 100%;
    }
  }

  .${DialogBody.styledComponentId} {
    padding: 0;
    margin: 0;
    border-radius: 16px;
    overflow: hidden;

    p {
      text-align: center;
    }

    @media ${device.mobile} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
      }
    }
  }
`;

export const ButtonIcon = styled.button`
  padding: 0px;
  position: absolute;
  height: 32px;
  width: 32px;
  border-radius: 999px !important;
  top: -24px;
  right: -24px;

  width: 24px;
  height: 24px;

  z-index: 8;

  cursor: ${({ disabled }) => (disabled == true ? "not-allowed" : "pointer")};
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);

  svg {
    path {
      stroke: white;
    }
  }

  @media ${device.mobile} {
    top: 8px;
    right: 8px;
  }
`;

export const ButtonAdsWrapper = styled.div`
  padding: 0px;
  position: absolute;

  width: 100%;
  bottom: 3%;
  z-index: 8;

  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-weight: 400;
    width: 80%;
    margin: 0 auto;
    line-height: normal;
    margin-top: 16px;
    color: #ffffff;
  }

  @media (max-height: 700px) {
    bottom: 3%;

    p {
      margin-top: 16px;
      width: 95%;

      font-size: 10px;
    }
  }

  @media (max-height: 450px) {
    bottom: 2%;

    p {
      margin-top: 8px;
      width: 95%;

      font-size: 8px;
    }
  }

  @media ${device.mobile} {
    bottom: 3%;

    p {
      margin-top: 16px;
      width: 95%;

      font-size: 10px;
    }
  }

  @media (max-width: 400px) {
    p {
      width: 95%;

      font-size: 8px;
    }
  }
`;

export const ButtonAds = styled.button`
  border-radius: 60px !important;
  background: #f9d44c !important;
  color: #151414;

  margin: 0 auto;
  padding: 16px 32px;

  cursor: ${({ disabled }) => (disabled == true ? "not-allowed" : "pointer")};
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  font-size: 30px;
  font-weight: 700;

  @media ${device.mobile} {
    font-size: 16px;
    padding: 4px 32px;
  }

  @media (max-height: 700px) {
    font-size: 14px;
    padding: 4px 32px;
  }

  @media (max-height: 450px) {
    font-size: 12px;
    padding: 4px 16px;
  }
`;
