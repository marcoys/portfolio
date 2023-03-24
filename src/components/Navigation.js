import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../scss/navigation.scss';

function Navigation({ leftWidth }) {
  const [ onoff, setOnoff ] = useState(1);
  let navigate = useNavigate();

  return (
    <div className='navigation' style={{ marginLeft: (leftWidth)}}>
      <ul>
        <li className={ onoff === 1 ? 'nav on' : 'nav'} onClick={() => {navigate('/'); setOnoff(1)}}>PROFILE</li>
        <li className={ onoff === 2 ? 'nav on' : 'nav'} onClick={() => {navigate('/skill'); setOnoff(2)}}>SKILL</li>
        <li className={ onoff === 3 ? 'nav on' : 'nav'} onClick={() => {navigate('/projects'); setOnoff(3)}}>PROJECTS</li>
      </ul>
    </div>
  )
}

export default Navigation