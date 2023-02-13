import logo from './logo.svg';
import './reset.css';
import './App.css';
import LeftContent from './components/LeftContent';
import MainContent from './components/MainContent';
import RightContent from './components/RightContent'

function App() {
  return (
    <div className="App">
      <LeftContent />
      <MainContent />
      <RightContent />
    </div>
  );
}

export default App;
