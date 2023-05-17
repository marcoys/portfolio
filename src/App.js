import logo from './logo.svg';
import './scss/reset.scss';
import './scss/app.scss';
import LeftContent from './components/LeftContent';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import $ from 'jquery';

function App() {
  const [ leftWidth, setLeftWidth ] = useState(0);
  const [ naviWidth, setNaviWidth ] = useState(0);
  const [ fade, setFade ] = useState('');

  useEffect(() => {
    setFade('end');
    return () => {
      setFade('');
    }
  }, []);
  
// 사파리에서 onload 작동 안함..
  $(document).ready(function () {
    setLeftWidth(document.querySelector('.left-content').clientWidth);
      setNaviWidth(document.querySelector('.navigation').clientWidth);
      // console.log('왼쪽' + document.querySelector('.left-content').clientWidth);
      // console.log('네비' + document.querySelector('.navigation').clientWidth)
  })

  useEffect(() => {
    window.onresize = function(e) {
      setLeftWidth(document.querySelector('.left-content').clientWidth);
      setNaviWidth(document.querySelector('.navigation').clientWidth);
      // console.log(leftWidth);
    }
    return () => {
    }
  }, [leftWidth, naviWidth])

  return (
    <div className={'App start ' + fade}>
      <div className='wave-wrap'><div className='wave'></div></div>
      <LeftContent />
      <Navigation leftWidth={leftWidth} />
      
      <Routes>
        <Route path="/portfolio" element={<Profile leftWidth={leftWidth} naviWidth={naviWidth} />} />
        <Route path="/skills" element={<Skills leftWidth={leftWidth} naviWidth={naviWidth} />} /> 
        <Route path="/projects" element={<Projects leftWidth={leftWidth} naviWidth={naviWidth} />} /> 
        <Route /> 
      </Routes>
    </div>
  );
}

export default App;
