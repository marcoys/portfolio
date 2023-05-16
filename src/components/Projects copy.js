import { useEffect, useState } from 'react'
import '../scss/projects.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

function Profile({ leftWidth, naviWidth }) {
  const [ fade, setFade ] = useState('');


  useEffect(() => {
    setFade('end');
  
    return () => {
      setFade('')
    }
  }, [])
  

  return (
    <div className={'projects start ' + fade}  style={{ paddingLeft: (leftWidth) + (naviWidth)}}>
      <div className='container'>
        <h1>프로젝트</h1>
        <div className='slide-wrap'>
          <div className='slide-box'>

            <div className='slide-content'>
              <h3>누리웹 PDS 게시판 리뉴얼</h3>
              <div className='slide-contbox'>
                <div className='img-box'>
                  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                      <img src={`${process.env.PUBLIC_URL}/images/nuriweb_01.gif`} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={`${process.env.PUBLIC_URL}/images/nuriweb_02.gif`} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={`${process.env.PUBLIC_URL}/images/nuriweb_03.gif`} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className='txt-box'>
                  <p>주소:</p>
                  <p>작업기간: 2020.1.10 ~ 2020.1.20</p>
                  <p>퍼블리싱 100% 참여</p>
                  <br />
                  <div className='using-skill'>
                    <img src={`${process.env.PUBLIC_URL}/images/html.png`} alt="" />
                    <img src={`${process.env.PUBLIC_URL}/images/css3.png`} alt="" />
                    <img src={`${process.env.PUBLIC_URL}/images/javascript.png`} alt="" />
                    <img src={`${process.env.PUBLIC_URL}/images/jquery.png`} alt="" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile