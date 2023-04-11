import React from 'react';

function ImgSlide({skillTitle}) {
  return (
    <>
        {
          skillTitle.map((item, index) => {
            return (
              <img src={`${process.env.PUBLIC_URL}/images/${item}.png`} alt="" key={index} />
            )
          })
        }
    </>
  )
}

export default ImgSlide