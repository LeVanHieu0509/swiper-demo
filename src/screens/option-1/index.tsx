"use client";

import { useRouter } from "next/navigation";
import { HomepageWrapper } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation } from "swiper/modules";
import { FlexColumn } from "@/styles/common";
import { useState } from "react";
import DialogAds from "../components/dialog-ads";

interface HomepageProps {}

const Option1 = ({}: HomepageProps) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  console.log({ showModal });
  return (
    <HomepageWrapper>
      <img src={`${process.env.basePath}/img/layout-1-2.png`} alt="" className="layout-1-2 custom-prev" />

      <div className="button-wrapper">
        <p className="mb-24">Hỗ trợ khách hàng</p>
        <div className="support-buttons">
          <button className="button button-orange custom-next">Đóng phí bảo hiểm</button>
          <button className="button button-outline">Hỗ trợ tư vấn</button>
          <button className="button button-call">📞</button>
        </div>
      </div>

      <div className="content">
        <div className="content-children">
          <Swiper
            direction="vertical"
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                opacity: 1,
                shadow: false,
                translate: [0, 0, 0],
              },
              next: {
                shadow: false,
                translate: [0, "100%", 0],
              },
            }}
            modules={[EffectCreative, Navigation]}
            className="mySwiper"
            navigation={{
              prevEl: ".custom-prev", // Xác định nút "prev" tùy chỉnh
              nextEl: ".custom-next", // Xác định nút "next" tùy chỉnh
            }}
            speed={1000}
            simulateTouch={true} // Kích hoạt hành động vuốt (touch) để có cảm giác giống như vuốt
            touchRatio={1} // Điều chỉnh mức độ "nhạy cảm" với touch, mặc định là 1
            touchAngle={45} // Điều chỉnh góc vuốt nếu cần, mặc định là 45 độ
            longSwipes={true} // Cho phép vuốt dài
            longSwipesRatio={0.5}
          >
            <SwiperSlide>
              <img src={`${process.env.basePath}/img/layout-1-thong-tin.png`} alt="" className="layout-1-thong-tin" />
            </SwiperSlide>
            <SwiperSlide>
              <FlexColumn
                justify="flex-end"
                align="center"
                style={{ height: "100vh" }}
                className="w-100 layout-1-chon-goi-wrapper"
              >
                <img src={`${process.env.basePath}/img/layout-1-chon-goi.png`} alt="" className="layout-1-chon-goi" />

                <button className="button-1" onClick={() => setShowModal(true)}></button>
              </FlexColumn>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <DialogAds showModal={showModal} setShowModal={setShowModal} />
    </HomepageWrapper>
  );
};

export default Option1;
