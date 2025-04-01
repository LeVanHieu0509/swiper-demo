"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { EffectCards, EffectCreative, EffectFlip, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomepageWrapper } from "./styled";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/effect-creative";
import "swiper/css/effect-cards";
import "swiper/css/effect-flip";
interface HomepageProps {}

const Option1 = ({}: HomepageProps) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [t, setT] = useState(1);
  const swiperRef = useRef(null);
  return (
    <HomepageWrapper>
      <div className="left">
        <img src={`${process.env.basePath}/img/header.png`} alt="" />
        <div className="mt-20">
          <img src={`${process.env.basePath}/img/content.png`} alt="" />
        </div>
        <hr className="mt-8 mb-8" />
        <img src={`${process.env.basePath}/img/title.png`} alt="" />
        <div className="mt-6">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Navigation]}
            className="mySwiper"
            direction="vertical"
            navigation={true}
          >
            <SwiperSlide>
              <img src={`${process.env.basePath}/img/slide-left-1.png`} alt="" className="left-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.basePath}/img/slide-left-2.png`} alt="" className="left-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.basePath}/img/slide-left-3.png`} alt="" className="left-img" />
            </SwiperSlide>
          </Swiper>
          {/* <Swiper
            direction="vertical" // Thêm dòng này để đổi sang trượt dọc
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                translate: [0, "-120%", -400], // Điều chỉnh trục Y thay vì X
              },
              next: {
                translate: [0, "100%", 0], // Điều chỉnh trục Y thay vì X
              },
            }}
            modules={[EffectCreative, Navigation]}
            className="mySwiper"
            navigation={true}
          >
            <SwiperSlide>
              <img src={`${process.env.basePath}/img/slide-left-1.png`} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.basePath}/img/slide-left-1.png`} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.basePath}/img/slide-left-1.png`} alt="" />
            </SwiperSlide>
          </Swiper> */}
        </div>
      </div>
      <div className="right">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          modules={[EffectFlip, Navigation]}
          className="mySwiper2"
          onActiveIndexChange={() => {
            setT((prev) => prev + 1);
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide onClick={() => swiperRef.current?.slideNext()}>
            <img src={`${process.env.basePath}/img/slide-right-1.png`} alt="" />
          </SwiperSlide>
          <SwiperSlide onClick={() => swiperRef.current?.slideNext()}>
            <img src={`${process.env.basePath}/img/slide-right-2.png`} alt="" />
          </SwiperSlide>
          <SwiperSlide onClick={() => swiperRef.current?.slideNext()}>
            <img src={`${process.env.basePath}/img/slide-right-3.png`} alt="" />
          </SwiperSlide>
          <SwiperSlide
            style={{
              position: "relative",
            }}
          >
            <img src={`${process.env.basePath}/img/slide-right-4.png`} alt="" />
            <div className="cus" key={t}>
              <img src={`${process.env.basePath}/img/puz1.png`} alt="" className="puz1" />
              <img src={`${process.env.basePath}/img/puz2.png`} alt="" className="puz2" />
              <img src={`${process.env.basePath}/img/puz3.png`} alt="" className="puz3" />
              <img src={`${process.env.basePath}/img/puz4.png`} alt="" className="puz4" />
              <img src={`${process.env.basePath}/img/puz5.png`} alt="" className="puz5" />
              <img src={`${process.env.basePath}/img/puz6.png`} alt="" className="puz6" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <img src={`${process.env.basePath}/img/layout-1-2.png`} alt="" className="layout-1-2 custom-prev" />

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

      <DialogAds showModal={showModal} setShowModal={setShowModal} /> */}
    </HomepageWrapper>
  );
};

export default Option1;
