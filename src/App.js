import logo from './logo.svg';
import './reset.css';
import './App.css';
import LeftContent from './components/LeftContent';
import MainContent from './components/MainContent';
import RightContent from './components/RightContent'
import { useEffect, useState } from 'react';

function App() {
  const [ leftWidth, setLeftWidth ] = useState('0')

  window.onload = function() {
    setLeftWidth(document.querySelector('.left-content').clientWidth);
  }

  useEffect(() => {
    window.onresize = function(e) {
      setLeftWidth(document.querySelector('.left-content').clientWidth);
      console.log(leftWidth);
    }
    return () => {
    }
  }, [leftWidth])

  return (
    <div className="App">
      <LeftContent />
      <MainContent leftWidth={leftWidth} />
      <RightContent />
    </div>
  );
}

export default App;
