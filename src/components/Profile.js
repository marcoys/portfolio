import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import '../scss/profile.scss'

function Profile({ leftWidth, naviWidth }) {
  const [ fade, setFade ] = useState('');

  useEffect(() => {
    setFade('end');
    
  
    return () => {
      setFade('')
    }
  }, [])
  

  return (
    <div className={'profile start ' + fade}  style={{ marginLeft: (leftWidth) + (naviWidth)}}>
      <Outlet></Outlet>
      <div className='container'>
        <section>
          <h1>배움을 갈구하는 개발자, <strong className='txt-wht'>이유상</strong> 입니다. </h1>
          <p>
            대학교 졸업 무렵, 웹 퍼블리셔라는 직군을 알게되어 국비지원 프로그램을 다니며 IT에 입문하게 되었고, 이 후 2년 반 동안 웹 퍼블리셔로 근무하며 커리어를 시작하게 되었습니다. <br />이 후 단순 홈페이지 제작을 넘어서 웹 개발을 하고싶다는 욕심이 생겨 개발 공부를 시작하게 되었습니다. 
          </p>
        </section> 
        <section>
          <h1>CAREER</h1>
          <ul>
            <li>
              ■ 2020.01.02 ~ 2022.05.31<br /><strong clas>(주)누리웹</strong>&ensp;[웹 에이전시] : 웹 퍼블리셔 근무 (대리)
              <ol>
                <li>200여개 고객사 홈페이지 유지보수</li>
                <li>홈페이지 제작, 리뉴얼 프로젝트 진행</li>
              </ol>
            </li>
            <li>
              ■ 2018.06 ~ 2018.11<br /><strong>이젠아카데미컴퓨터학원</strong><br />&ensp;- 스마트미디어응용 디자인콘텐츠 개발과정 수료
              <ol>
                <li>정보설계 및 Mock-Up 제작</li>
                <li>UI 스타일가이드 제작 및 UI 설계</li>
                <li>인터렉션 및 화면설계</li>
                <li>안드로이드 앱 개발 응용</li>
                <li>UXUI 웹/앱 디자인 실무 프로젝트</li>
                <li>개인 프로젝트: 성남아트센터 웹사이트 리뉴얼</li>
                <li>개인 프로젝트: 치매예방앱 'DR. Dementia' 제작</li>
              </ol>
            </li>
          </ul>
        </section>
        
      </div>
    </div>
  )
}

export default Profile