import styled, { css } from "styled-components";

import { device } from "./media";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 769px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1240px) {
    max-width: 1270px;
  }

  @media (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const Spacing = styled.div`
  flex: 1;
`;

interface ScrollCustomProps {
  tableScroll?: boolean;
  overFlowY?: boolean;
  overFlowYWidth?: number; // width cho scroll Y
  radius?: number;
  heightContainer?: number;

  padding?: number;
}

export const ScrollCustom = styled.div<ScrollCustomProps>`
  max-height: ${({ heightContainer }) => (heightContainer ? heightContainer + "px" : null)};

  z-index: 100;
  padding-right: ${({ padding }) => (padding ? padding + "px" : null)};

  @media ${device.mobile} {
    max-height: ${({ heightContainer }) => (heightContainer ? heightContainer + "px" : null)};
    overflow: auto;
  }

  ::-webkit-scrollbar {
    width: ${({ overFlowY, overFlowYWidth }) => (overFlowY ? overFlowYWidth + "px" : "0px")};
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #dbdfe1;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: ${({ radius }) => (radius ? radius + "px" : "0px")};
    background-clip: padding-box;
  }
  ${({ tableScroll }) => tableScroll && TableScrollStyle}
`;

export const TableScrollStyle = css`
  /* width */
  div {
    div {
      div {
        ::-webkit-scrollbar {
          height: 7px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: transparent;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #dbdfe1;
          border-radius: 8px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #888;
        }
      }
    }
  }
`;

export const FormWrapper = styled.div`
  width: 58%;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const ActionsWrapper = styled.div<{ justify?: string }>`
  margin-bottom: 24px;
  display: flex;
  width: 100%;
  justify-content: ${({ justify }) => justify ?? "end"};

  align-items: center;

  @media ${device.mobile} {
    gap: 16px;
    flex-direction: column-reverse;
  }
`;

export const ServicesScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.mobile} {
    gap: 16px;
  }
`;

interface FieldSetProp {
  readonly active?: boolean;
  readonly error?: string | boolean;
}

export const FieldSet = styled.fieldset<FieldSetProp>`
  padding: 0;
  margin: 0;
  border: 1px solid ${({ active, error, theme }) => (error ? theme.color.status.red : "#ccc")};

  border-radius: 4px;
  position: relative;
  max-width: 100%;
`;

export const StickyWrapper = styled.div<{ top?: number; zIndex?: number }>`
  position: sticky;
  top: ${({ top }) => top ?? "0"}px;
  z-index: ${({ zIndex }) => zIndex};
`;

export const DialogBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  position: absolute;
  top: 0;
  left: 0;
`;

export const DialogWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BigClass = styled.div``.styledComponentId.replace("sc-", "ac-");
export const DialogContent = styled.div.attrs(({ big, radius12px, radius16px, large, mdheight }: any) => ({
  className: `${big ? BigClass : ""}${radius12px ? " radius12px" : ""}${radius16px ? " radius16px" : ""} ${
    large ? "large" : ""
  },${mdheight ? "mdheight" : ""}`,
}))`
  position: relative;
  /* min-width: 300px; */
  min-width: 1120px;
  padding: 32px 24px;
  max-height: 90vh;
  max-width: 100vw;
  background: white;
  border-radius: 40px;

  display: flex;
  flex-direction: column;

  &.${BigClass} {
    width: 730px;

    @media ${device.mobile} {
      padding: 0px;
    }
  }

  &.large {
    width: 1168px;
  }
  &.mdheight {
    height: 590px;
  }
  &.no-padding {
    padding-left: 0;
    padding-right: 0;
  }

  &.radius12px {
    border-radius: 12px;
  }

  &.radius16px {
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    padding: 0 !important;
    min-width: 100vw;
    height: calc(100 * var(--vh));
    max-height: calc(100 * var(--vh));

    padding: 0px;
    border-radius: 0px;

    &.radius12px,
    &.radius16px {
      border-radius: 0px;
    }

    &.mdheight {
      height: calc(100 * var(--vh));
    }
  }
`;

export const DialogHeader = styled.h3`
  display: block;
  text-align: center;
  border: 0;

  font-weight: 700;
  font-size: 24px;
  line-height: 32px;

  color: ${({ theme }) => theme.color.text.body};

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    padding: 20px 0px 20px;
    border-bottom: 1px solid ${({ theme }) => theme.color.status.gray2};
  }
`;
const NoPaddingClass = styled.div``.styledComponentId;

export const DialogBody = styled.div.attrs(({ noPadding }: any) => ({
  className: `${noPadding ? NoPaddingClass : ""}`,
}))`
  padding: 32px 0px 40px;
  color: ${({ theme }) => theme.color.text.body};
  flex: 1;
  overflow: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  &.${NoPaddingClass} {
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 24px;
    font-size: 14px;
  }

  p:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const DialogFooter = styled.div`
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  button:not(:last-child) {
    margin-right: 24px;
  }

  @media (max-width: 768px) {
    padding: 24px;

    button {
      padding: 0 !important;
      width: 50%;
      min-width: unset !important;
    }
  }
`;

export const UnderlineWrapper = styled.div`
  padding-bottom: 5px;
  width: 100%;

  input {
    width: 100%;
    border: 0;
    height: 30px;

    :disabled {
      color: ${({ theme }) => theme.color.text.disabled};
    }
  }
`;

export const BorderedWrapper = styled.div`
  border-radius: 8px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.status.gray2};
  background: #ffffff;

  input {
    padding: 10px 16px;
    width: 100%;
  }

  @media ${device.mobile} {
    min-width: 90%;
  }
`;

export const BorderedInput = styled.input`
  padding: 5px 5px 5px 10px;
  border-radius: 8px;
  width: 100%;
  border: 0;
  height: 40px;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  border-collapse: separate;

  tr:last-child {
    td {
    }
  }

  th {
    padding-left: 30px;
    padding-right: 30px;
    text-align: left;
    text-transform: uppercase;

    color: white;
    min-height: 52px;
    height: 52px;
    font-weight: 700;
    line-height: 24px;

    :not(:last-child) {
    }
  }

  td {
    min-width: 40px;
    min-height: 44px;
    background: white;
    padding: 15px 30px;

    :first-child {
    }
  }

  thead {
    tr:first-child {
      th {
        :first-child {
          border-top-left-radius: 4px;
        }
        :last-child {
          border-top-right-radius: 4px;
        }
      }
    }
    tr:not(:first-child) {
    }
  }

  tbody {
    tr:last-child {
      td {
        :first-child {
          border-bottom-left-radius: 4px;
        }
        :last-child {
          border-bottom-right-radius: 4px;
        }
      }
    }
  }

  //custom table

  thead tr:first-child th:first-child {
    border-top-left-radius: 16px;
  }

  thead tr:first-child th:last-child {
    border-top-right-radius: 16px;
  }

  tbody tr:last-child td:first-child {
    border-bottom-left-radius: 16px;
  }

  tbody tr:last-child td:last-child {
    border-bottom-right-radius: 16px;
  }

  thead {
    tr {
      th {
      }
    }
  }

  th {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const FormInfoContainer = styled.div`
  max-width: 992px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const FormLeftContent = styled.div`
  max-width: calc(100% - 360px);
  flex: 1;

  @media (max-width: 991px) {
    margin: 0 auto;
    width: 100%;
    min-width: 100%;
  }
`;

export const FormRightContent = styled.div`
  margin-left: 22px;
  width: 320px;

  @media (max-width: 991px) {
    margin: 0 auto;
    width: 100%;
    min-width: 100%;
  }
`;

export const StepInfoWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 20px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    flex: 1;

    margin-bottom: 16px;
  }

  @media ${device.mobile} {
    padding: 24px 0;

    h1 {
      white-space: nowrap;
      margin-bottom: 8px;
      min-width: 100%;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const WrapperPromoSection = styled.div``;

export const WrapperShareLinkSuccess = styled.div`
  margin-top: 100px;
  h3 {
    align-items: center;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 56px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    h3 {
      font-weight: 500;
      font-size: 22px;
      line-height: 30px;
      margin: 0;
    }
  }
`;

export const ContentShareLink = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 80px;
  border: 1px solid #dbdfe1;
  box-sizing: border-box;
  border-radius: 4px;
  a {
    display: block;
    text-decoration-line: underline;
    color: #e87722;
    margin-top: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    border: none;
    padding: 40px 24px 0;
    a {
      margin-top: 40px;
      text-align: center;
    }
  }
`;

export const Voucher = styled.span`
  display: inline-block;
  color: #ffff;
  padding: 0 12px;
  background-image: url(${process.env.basePath}/img/icon_voucher.png);
  background-repeat: repeat-y;
  background-size: 100% 100%;
  background-position: center;

  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 29px;
  text-transform: uppercase;
`;

export const Note = styled.div`
  margin-top: 24px;
  padding: 16px;
  border-radius: ${({ br }: any) => (br ? `${br}px` : "16px")};
  background: #dbdfe1;
  border: 1px solid #dbdfe1;
  ul {
    margin-top: 10px;
    padding-left: 20px;
    margin-left: 0 !important;

    li {
      margin: 0 !important;
      text-align: justify;

      :not(:first-child) {
        padding-top: 5px;
      }

      ul {
        li {
          :not(:first-child) {
            padding-top: 0px;
          }

          padding-top: 0px;
        }
      }
    }
  }

  a {
    color: ${({ theme }) => theme.color.status.primary};
  }

  @media ${device.mobile} {
    margin-top: 16px;
    padding: 16px;
  }
`;
