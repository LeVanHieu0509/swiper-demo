import styled, { keyframes } from "styled-components";

const slideLeft = keyframes`
 0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const slideInRight = keyframes`
 0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

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

const left = keyframes`
from{
  transform: translateX(0);
  opacity: 1;
}to{
  transform: translate(-20px);
  opacity: 0;
}
`;

export const HomepageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 32px;
  gap: 40px;

  width: 100vw;
  height: 100vh;

  background-image: url(${(props) => `${process.env.basePath}/img/op3.png`});
  background-size: contain;
  background-repeat: no-repeat;

  .btn {
    position: fixed;
    right: 120px;
    height: 36px;
    width: 100px;
    cursor: pointer;
  }

  .sw-wr {
    position: fixed;
    bottom: 60px;
    left: 75px;
    width: calc(100% - 150px);
    margin: auto;
    height: 329px;
    display: flex;
    align-items: flex-end;
    gap: 24px;
    overflow: hidden;

    .icon {
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      gap: 16px;

      div {
        cursor: pointer;
      }
    }

    .slide-wrapper {
      /* transform: scale(0.7); */
      /* width: 349px;
      height: 223px; */
      width: 514px;
      height: 300px;
      display: flex;
      align-items: flex-end;

      img {
        height: 100%;
      }
    }

    .swiper-slide-active {
      filter: blur(0);

      img {
        height: 100%;
      }
    }

    .swiper-slide-next {
      img {
        height: 90%;
      }
    }

    /* &:nth-child(1) .animating {
      animation: ${slideLeft} 2s ease-in-out;
    } */

    /* Ảnh thứ hai sẽ trượt từ phải vào khi đang animation */
  }
  .mySwiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    filter: blur(2px);
    align-items: flex-end;

    .left-img {
      height: 70%;
    }
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
    right: 70px !important;
    left: auto;
    top: 10%;
  }

  .swiper-button-next {
    top: 10%;
  }
`;
