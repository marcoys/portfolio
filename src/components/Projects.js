import React, { useEffect, useState } from 'react'
import '../scss/projects.scss';
import ImgSlide from './ImgSlide';
import SkillSlide from './skillSlide'
import projectsData from '../projects.json';

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
              {
                [...projectsData].reverse().map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className='slide-content'>
                        <h3>▶ {item.name}</h3>
                        <div className='slide-contbox'>
                          <div className='img-box'>
                            <ImgSlide imageTitle={item.image} />
                          </div>
                          <div className='txt-box'>
                            <p>주소 : {item.url !== '-' ? <a href={item.url} target='_blank' rel='noreferrer'>{item.url}</a> : '-' } </p>
                            <p>작업기간 : {item.period}</p>
                            <p className='comment'>{item.comment}</p>
                            <br />
                            <div className='using-skill'>
                              <SkillSlide skillTitle={item.skill} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  )
                })
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile