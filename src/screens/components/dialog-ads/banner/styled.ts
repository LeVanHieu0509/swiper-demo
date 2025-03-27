import styled from "styled-components";

export const SvgRenderWrapper = styled.div`
  min-width: 300px;

  svg {
    margin: 20px;
  }
  rect {
    transition: transform 1s ease-in-out; /* Mượt mà cho chuyển động */
  }

  svg {
    width: 504px;
    height: 622px;
    margin: 0 auto;
    display: block;
  }

  /* Các phần tử SVG sẽ bay từ 6 góc vào */

  /* Đặt hiệu ứng cho các mảnh SVG */
  path:nth-child(1) {
    animation-delay: 0s;
    animation: flyIn1 2s ease-out forwards;
  }

  path:nth-child(2) {
    animation-delay: 0.5s;
    animation: flyIn2 2s ease-out forwards;
  }

  path:nth-child(3) {
    animation-delay: 1s;
    animation: flyIn2 3s ease-out forwards;
  }

  path:nth-child(4) {
    animation-delay: 1.5s;
  }

  path:nth-child(5) {
    animation-delay: 2s;
  }

  path:nth-child(6) {
    animation-delay: 2.5s;
  }

  /* Định nghĩa keyframes cho hiệu ứng bay vào từ 6 góc */
  @keyframes flyIn1 {
    0% {
      transform: translateX(1500px) translateY(1500px); /* Di chuyển từ phía trên */
      opacity: 0.5;
    }

    100% {
      transform: translateX(0) translateY(0); /* Về vị trí chính giữa */
      opacity: 1;
    }
  }
  @keyframes flyIn2 {
    0% {
      transform: translateX(-1500px) translateY(1500px); /* Di chuyển từ phía trên */
      opacity: 0.5;
    }

    100% {
      transform: translateX(0) translateY(0); /* Về vị trí chính giữa */
      opacity: 1;
    }
  }

  @keyframes flyIn3 {
    0% {
      transform: translateX(-1500px) translateY(1500px); /* Di chuyển từ phía trên */
      opacity: 0.5;
    }

    100% {
      transform: translateX(0) translateY(0); /* Về vị trí chính giữa */
      opacity: 1;
    }
  }
`;

export const SvgContent2 = styled.div``;
