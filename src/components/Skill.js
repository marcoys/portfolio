import { useEffect, useState } from 'react'
import '../scss/skill.scss'

function Profile({ leftWidth, naviWidth }) {
  const [ fade, setFade ] = useState('');

  useEffect(() => {
    setFade('end');
  
    return () => {
      setFade('')
    }
  }, [])
  

  return (
    <div className={'skill start ' + fade}  style={{ marginLeft: (leftWidth) + (naviWidth)}}>
      <div className='container'>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/html.png`} alt="" />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/css3.png`} alt="" />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/javascript.png`} alt="" />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/jquery.png`} alt="" />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/nodejs.png`} alt="" />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/react.png`} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Profile