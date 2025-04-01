import styled, { keyframes } from "styled-components";

const t1 = keyframes`
from{
  opacity: 0;
  transform: translate(-20px,-20px);
}to{
  opacity: 1;
  transform: translate(0,0);
}
`;
const t2 = keyframes`
from{
  opacity: 0;
  transform: translateY(-20px);
}to{
  opacity: 1;
  transform: translateY(0);
}
`;
const t3 = keyframes`
from{
  opacity: 0;
  transform: translate(20px,-20px);
}to{
  opacity: 1;
  transform: translate(0,0);
}
`;
const t4 = keyframes`
from{
  opacity: 0;
  transform: translate(-20px,20px);
}to{
  opacity: 1;
  transform: translate(0,0);
}
`;
const t5 = keyframes`
from{
  opacity: 0;
  transform: translateY(20px);
}to{
  opacity: 1;
  transform: translateY(0);
}
`;
const t6 = keyframes`
from{
  opacity: 0;
  transform: translate(20px,20px);
}to{
  opacity: 1;
  transform: translate(0,0);
}
`;

export const HomepageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 32px;
  gap: 40px;

  width: 100vw;
  height: 100vh;

  display: flex;

  .cus {
    position: absolute;
    background: #fff;
    width: 100%;
    height: 200px;
    top: 86px;
    width: calc(100% - 60px);
    height: 444px;
    margin: 0px;
    img {
      width: 210px;
      height: 208px !important;
    }

    .puz1 {
      position: absolute;
      animation: ${t1} 1.5s;
    }
    .puz2 {
      position: absolute;
      left: 210px;
      animation: ${t2} 1.5s;
    }
    .puz3 {
      position: absolute;
      left: 420px;
      animation: ${t3} 1.5s;
    }
    .puz4 {
      position: absolute;
      top: 208px;
      left: 0;
      animation: ${t4} 1.5s;
    }
    .puz5 {
      position: absolute;
      top: 208px;
      left: 210px;
      animation: ${t5} 1.5s;
    }
    .puz6 {
      position: absolute;
      top: 208px;
      left: 420px;
      animation: ${t6} 1.5s;
    }
  }

  .left {
    width: 50%;
  }
  .right {
    width: 50%;
  }

  .swiper {
    height: 410px;

    .swiper-slide {
      .left-img {
        width: 100%;
      }
    }
  }

  .mySwiper2 {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    box-shadow: 0 0px 8px rgba(0, 0, 0, 0.15);
    background-color: #fff;
  }
  .mySwiper2 .swiper-slide {
    box-shadow: none;

    img {
      height: 100%;
    }
  }

  .swiper-slide .swiper-slide-visible .swiper-slide-active {
    background-color: #fff !important ;
  }

  .swiper-3d .swiper-slide-shadow {
    background: transparent !important;
  }

  .swiper-button-next,
  .swiper-button-prev {
    border: 3px solid #e87722;
    /* width: 20px; */
    border-radius: 50%;
    width: 45px;
    height: 45px;
    background-color: #fff;

    &:after {
      font-size: 24px;
      color: #e87722;
    }
  }

  .swiper-button-prev {
    right: 10px !important;
    left: auto;
    top: 40%;
    transform: rotate(90deg);
  }

  .swiper-button-next {
    top: 60%;
    transform: rotate(90deg);
  }

  .layout-1-2 {
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 1;
    object-fit: cover;
  }

  .layout-1-thong-tin {
    height: 100vh;
    width: 100%;
    width: 460px;
    object-fit: contain;
    transform: translateX(11px);
  }

  .layout-1-chon-goi-wrapper {
    width: 440px;
    transform: translateX(17px);
  }

  .content {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    width: 460px;
  }

  .content-children {
    position: relative;

    .button-1 {
      opacity: 0.2;
      position: absolute;
      top: 50%;
      right: 3%;
      transform: translate(-50%, -50%);
      width: 30px;
      height: 150px;
      background-color: #ff6a00;
      color: white;
      font-size: 20px;
      border: none;
      cursor: pointer;
    }
  }
  ////////////////////////
  .button-wrapper {
    border-top-right-radius: 50px;
    padding: 24px;

    background: #ffffff;
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: 0;

    /* Container chứa các nút */
    .support-buttons {
      display: flex;
      justify-content: flex-start;
      gap: 12px;
    }

    /* Nút */
    .button {
      padding: 12px 24px;
      border-radius: 6px;
      font-weight: 500;
      font-size: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition:
        background-color 0.3s ease,
        box-shadow 0.3s ease;
      border: none;
    }

    .button-orange {
      background-color: #ff6a00;
      color: white;
    }

    .button-orange:hover {
      background-color: #ff4e00;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .button-outline {
      background-color: transparent;
      border: 2px solid #ff6a00;
      color: #ff6a00;
    }

    .button-outline:hover {
      background-color: #ff6a00;
      color: white;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* Nút gọi */
    .button-call {
      padding: 12px;
      border-radius: 50%;
      background-color: #ff6a00;
      color: white;
      font-size: 20px;
    }

    .button-call:hover {
      background-color: #ff4e00;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
`;
