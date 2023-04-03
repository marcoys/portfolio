import { useCallback, useEffect, useState } from 'react'
import '../scss/skills.scss'

function Profile({ leftWidth, naviWidth }) {
  const [ fade, setFade ] = useState('');
  const [ per, setPer ] = useState([ 0, 0, 0, 0, 0, 0 ]);
  const [ gaugeCount, setGaugeCount ] = useState(0);

  useEffect(() => {
    setFade('end');

    setTimeout(() => {
      setPer([ 80, 80, 70, 40, 70, 70 ])
    }, 700);
  
    return () => {
      setFade('')
    }
  }, [])

  return (
    <div className={'skill start ' + fade}  style={{ marginLeft: (leftWidth) + (naviWidth)}}>
      <div className='container'>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/html.png`} alt="" />
          <div className='gauge-wrap'>
            <h5>HTML</h5>
            <div className='gauge-box' style={{ paddingRight: `${100 - per[0]}%` }}>
              <div className='gauge'></div>
            </div>
          </div>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/css3.png`} alt="" />
          <div className='gauge-wrap'>
            <h5>CSS</h5>
            <div className='gauge-box' style={{ paddingRight: `${100 - per[1]}%` }}>
              <div className='gauge'></div>
            </div>
          </div>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/javascript.png`} alt="" />
          <div className='gauge-wrap'>
            <h5>Java Script</h5>
            <div className='gauge-box' style={{ paddingRight: `${100 - per[2]}%` }}>
              <div className='gauge'></div>
            </div>
          </div>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/nodejs.png`} alt="" />
          <div className='gauge-wrap'>
            <h5>Node.js</h5>
            <div className='gauge-box' style={{ paddingRight: `${100 - per[3]}%` }}>
              <div className='gauge'></div>
            </div>
          </div>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/react.png`} alt="" />
          <div className='gauge-wrap'>
            <h5>React</h5>
            <div className='gauge-box' style={{ paddingRight: `${100 - per[4]}%` }}>
              <div className='gauge'></div>
            </div>
          </div>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/jquery.png`} alt="" />
          <div className='gauge-wrap'>
            <h5>Jquery</h5>
            <div className='gauge-box' style={{ paddingRight: `${100 - per[5]}%` }}>
              <div className='gauge'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile