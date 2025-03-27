import styled from "styled-components";

export const HomepageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

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
