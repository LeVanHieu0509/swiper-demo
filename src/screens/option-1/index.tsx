"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { HomepageWrapper } from "./styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/effect-creative";
import Icons from "@/components/icons";
import "swiper/css/effect-cards";
import "swiper/css/effect-flip";
import Modal1 from "./modal-op-3/modal1";
import Modal2 from "./modal-op-3/modal2";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
interface HomepageProps {}

const imgs = [
  `${process.env.basePath}/img/slide-left-1.png`,
  `${process.env.basePath}/img/slide-left-2.png`,
  `${process.env.basePath}/img/slide-left-3.png`,
  `${process.env.basePath}/img/slide-left-1.png`,
  `${process.env.basePath}/img/slide-left-2.png`,
  `${process.env.basePath}/img/slide-left-3.png`,
];

const Option1 = ({}: HomepageProps) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [t, setT] = useState(1);
  const [open3, setOpen3] = useState(false);

  const [imgSlide, setImgSlide] = useState(imgs);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (animating) return; // Ngăn chặn nhiều click liên tiếp trong lúc đang animation

    setAnimating(true);

    setImgSlide((prevImgs) => {
      const newImgs = [...prevImgs];
      const firstImg = newImgs.shift(); // Lấy ảnh đầu tiên
      newImgs.push(firstImg); // Đưa ảnh đầu tiên xuống cuối
      return newImgs;
    });

    // Kết thúc animation sau thời gian chuyển
    setTimeout(() => setAnimating(false), 300);
  };

  const handlePrev = () => {
    if (animating) return; // Ngăn chặn nhiều click liên tiếp trong lúc đang animation

    setAnimating(true);

    setImgSlide((prevImgs) => {
      const newImgs = [...prevImgs];
      const lastImg = newImgs.pop(); // Lấy ảnh cuối cùng
      newImgs.unshift(lastImg); // Đưa ảnh cuối cùng lên đầu
      return newImgs;
    });

    // Kết thúc animation sau thời gian chuyển
    setTimeout(() => setAnimating(false), 300);
  };
  return (
    <HomepageWrapper>
      <Modal1 showModal={showModal} setShowModal={setShowModal} setOpen3={setOpen3} />
      <Modal2 showModal={open3} setShowModal={setOpen3} />

      <div className="btn" onClick={() => setShowModal(true)}></div>

      <div className="sw-wr">
        <Swiper
          slidesPerView={3}
          spaceBetween={60}
          navigation={true}
          draggable={true}
          modules={[Navigation]}
          className="mySwiper"
          loop={true}
        >
          {imgSlide.map((img, index) => (
            <div key={index} className={`slide-wrapper ${animating ? "animating" : ""}`}>
              <SwiperSlide>
                <img
                  src={img}
                  alt=""
                  className="left-img"
                  style={{
                    // filter: `blur(${index * 1}px)`,
                    transition: "all 0.3s ease-in-out",
                    // height: `${100 - index * 10}%`, // Giảm kích thước dần đều
                  }}
                />
              </SwiperSlide>
              {/* <img
                src={img}
                alt=""
                key={index}
                className={`left-img ${animating ? "animating" : ""}`}
                style={{
                  filter: `blur(${index * 1}px)`,
                  transition: "all 0.3s ease-in-out",
                  height: `${100 - index * 10}%`, // Giảm kích thước dần đều
                }}
              /> */}
            </div>
          ))}
          {/* <SwiperSlide>
            <img src={`${process.env.basePath}/img/slide-left-1.png`} alt="" className="left-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${process.env.basePath}/img/slide-left-2.png`} alt="" className="left-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${process.env.basePath}/img/slide-left-3.png`} alt="" className="left-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${process.env.basePath}/img/slide-left-1.png`} alt="" className="left-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${process.env.basePath}/img/slide-left-2.png`} alt="" className="left-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${process.env.basePath}/img/slide-left-3.png`} alt="" className="left-img" />
          </SwiperSlide> */}
        </Swiper>
        {/* {imgSlide.map((img, index) => (
          <div key={index} className={`slide-wrapper ${animating ? "animating" : ""}`}>
            <img
              src={img}
              alt=""
              key={index}
              className={`left-img ${animating ? "animating" : ""}`}
              style={{
                filter: `blur(${index * 1}px)`,
                transition: "all 0.3s ease-in-out",
                height: `${100 - index * 10}%`, // Giảm kích thước dần đều
              }}
            />
          </div>
        ))} */}

        {/* <div className="icon">
          <div onClick={handlePrev}>
            <Icons icon="icon-arrow-left-circle" size={48} />
          </div>
          <div onClick={handleNext}>
            <Icons icon="icon-arrow-right-circle" size={48} />
          </div>
        </div> */}
      </div>
    </HomepageWrapper>
  );
};

export default Option1;
