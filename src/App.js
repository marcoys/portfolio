import logo from './logo.svg';
import './scss/reset.scss';
import './scss/app.scss';
import LeftContent from './components/LeftContent';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation'
import { useEffect, useState } from 'react';

function App() {
  const [ leftWidth, setLeftWidth ] = useState('0');
  const [ naviWidth, setNaviWidth ] = useState('0');
  
  window.onload = function() {
    setLeftWidth(document.querySelector('.left-content').clientWidth);
    setNaviWidth(document.querySelector('.navigation').clientWidth);
  }

  useEffect(() => {
    window.onresize = function(e) {
      setLeftWidth(document.querySelector('.left-content').clientWidth);
      setNaviWidth(document.querySelector('.navigation').clientWidth);
      console.log(leftWidth);
    }
    return () => {
    }
  }, [leftWidth, naviWidth])

  return (
    <div className="App">
      <LeftContent />
      <Navigation leftWidth={leftWidth} />
      <MainContent leftWidth={leftWidth} naviWidth={naviWidth} />
    </div>
  );
}

export default App;
