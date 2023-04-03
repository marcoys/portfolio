import { useEffect, useState } from 'react'
import '../scss/projects.scss'

function Profile({ leftWidth, naviWidth }) {
  const [ fade, setFade ] = useState('');

  useEffect(() => {
    setFade('end');
  
    return () => {
      setFade('')
    }
  }, [])
  

  return (
    <div className={'projects start ' + fade}  style={{ marginLeft: (leftWidth) + (naviWidth)}}>
      <div className='container'>
        <h1>프로젝트</h1>
        <div className='slide-wrap'>
          <div className='slide-box'>
            <div className='slide-content'>
              <h3>누리웹 PDS 게시판 리뉴얼</h3>
              <div className='slide-contbox'>
                <div className='img-box'>
                  <img src={`${process.env.PUBLIC_URL}/images/nuriweb_01.gif`} alt="" width={'100%'} />
                </div>
                <div className='txt-box'>
                  <p>주소:</p>
                  <p>작업기간: 2020.1.10 ~ 2020.1.20</p>
                  <p>퍼블리싱 100% 참여</p>
                  <br />
                  <div className='using-skill'>
                    <img src={`${process.env.PUBLIC_URL}/images/html.png`} />
                    <img src={`${process.env.PUBLIC_URL}/images/css3.png`} />
                    <img src={`${process.env.PUBLIC_URL}/images/javascript.png`} />
                    <img src={`${process.env.PUBLIC_URL}/images/jquery.png`} />
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