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
          <h1>만학도를 꿈꾸는 <strong className='txt-wht'>이유상</strong> 입니다. </h1>
          <p>
            대학교 졸업 무렵, 주변 개발자 친구들을 통해 웹 퍼블리셔라는 직군이 있다는 것을 알게되었고, 국비지원 프로그램을 이수하며 IT의 길로 입문하게 되었습니다.<br />이 후, 웹 에이전시 회사에 취업하여 2년 반 동안 웹 퍼블리셔로 근무하며 커리어를 시작하게 되었습니다.
            <br />
            <br />
            웹 개발자님들과 여러 프로젝트를 진행해보고, 유지보수 작업을 하며 오류들을  분석/수정하다보니 자연스레 마크업 언어를 넘어 프로그래밍 언어들을 접하게 되었습니다. 작업들을 진행하며 프로그래밍 언어들을 숙지해 놓으면 업무에 큰 도움이 될 것 같다고 느꼈고, 실제 간단한 php 코드들은 직접 구현하여 큰 부분은 아니었지만 앞 단에서 개발  업무를 조금이라도  더 간단해주는 하는 경험을 하였습니다.
            <br />
            <br />
            퇴사 후에는 웹 퍼블리셔를 넘어 프론트엔드 개발자로 거듭나기 위하여 JavaScript와 React 공부를 시작하였고,  개인 프로젝트 몇 가지를 진행하며 언어 숙련도를 높여갔습니다. 
            <br />
            <br />
            저는 흐르지 않는 물이 고여있듯, 사람은 배움을 멈춘다면 생각이 고여버린다고 생각합니다.
            항상 호기심을 갖고 학습하며 새로운 것에도 열려있는 그런 사람, 개발자가 되고싶습니다.

          </p>
        </section> 
        <section>
          <h1>CAREER</h1>
          <ul>
            <li>
              <p>■ 2020.01.02 ~ 2022.05.31</p>
              <h5>
                <strong>(주)누리웹</strong>&ensp;[웹 에이전시] : 웹 퍼블리셔 근무 (대리)
              </h5>
              <ol>
                <li>500여개 고객사 홈페이지 유지보수</li>
                <li>홈페이지 제작, 리뉴얼 프로젝트 진행</li>
              </ol>
            </li>
            <li>
              <p>■ 2018.06 ~ 2018.11</p>
              <h5>
                <strong>이젠아카데미컴퓨터학원</strong>
                <br />&ensp;- 스마트미디어응용 디자인콘텐츠 개발과정 수료
              </h5>
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