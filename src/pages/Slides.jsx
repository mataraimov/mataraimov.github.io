import React from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

class Slides extends React.Component {
  state = {
    currentIndex: 0,
    colors: [
      'https://slab.stanford.edu/sites/g/files/sbiybj25201/files/styles/card_1900x950/public/media/image/istock-1300754614_0.jpg?h=8f74817f&itok=gTWhzZQc',
    ],
  };
  nextIndex = () => {
    const { colors, currentIndex } = this.state;
    if (currentIndex === colors.length - 1) {
      return this.setState({ currentIndex: 0 });
    }

    return this.setState({
      currentIndex: currentIndex + 1,
    });
  };

  prevIndex = () => {
    const { colors, currentIndex } = this.state;
    if (currentIndex === 0) {
      return this.setState({
        currentIndex: colors.length - 1,
      });
    }

    return this.setState({
      currentIndex: currentIndex - 1,
    });
  };

  render() {
    const { colors, currentIndex } = this.state;
    return (
      <div>
        <ReactScrollWheelHandler
          upHandler={this.prevIndex}
          downHandler={this.nextIndex}
          className="scroll__wheel"
          style={{
            backgroundImage: `url(${colors[currentIndex]})`,
            transition: 'backgroundImage  .7s ease-out ',
            animationName: 'slider',
            animationDelay: '2s',
            animationDuration: 'infinite',
          }}
        >
          <div
            style={{
              height: '70vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <h6>There is</h6>
            <h6>no</h6>
            <h6>ordinary,</h6>
            <h6>only</h6>
            <h6>extraordinary</h6>
          </div>
        </ReactScrollWheelHandler>
      </div>
    );
  }
}

export default Slides;

{
  /* <h1>SCROLL FOR CHANGE BACKGROUND COLOR</h1> */
}
// // import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import '../scss/slider.css';

// // import required modules
// import { Mousewheel, Pagination } from 'swiper';

// const Slides = () => {
//   return (
//     <div>
//       fjdlfkj
//       <Swiper
//         direction={'vertical'}
//         slidesPerView={1}
//         spaceBetween={30}
//         mousewheel={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Mousewheel, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };
// export default Slides;
