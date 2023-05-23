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
          <h1>배움을 먹고사는 개발자, <strong className='txt-wht'>이유상</strong> 입니다. </h1>
          <p>
            대학교 졸업 무렵, 주변 개발자 친구들을 통해 웹 퍼블리셔라는 직군이 있다는 것을 알게되었고, 국비지원 프로그램을 이수하며 IT의 길로 입문하게 되었습니다.<br />이 후, 웹 에이전시 회사에 취업하여 2년 반 동안 웹 퍼블리셔로 근무하며 커리어를 시작하게 되었습니다.
            <br />
            <br />
            웹 개발자님들과 여러 프로젝트를 진행해보고, 유지보수 작업을 하며 기능 오류를 수정/분석하다보니 자연스레  마크업 언어가 아닌 프로그래밍 언어를 사용하는 웹 개발에 관심이 생겼고,<br />프론트엔드 개발자로 발돋움하기 위해 공부를 시작하게 되었습니다. 
            <br />
            <br />
            저는 흐르지 않는 물이 고이듯, 사람도 배움을 멈춘다면 생각의 범주가 고여버린다고 생각합니다.<br />항상 호기심을 갖고 배움을 추구하여 새로운 것에도 열려있는 그런 사람, 개발자가 되고싶습니다.
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
                <li>200여개 고객사 홈페이지 유지보수</li>
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