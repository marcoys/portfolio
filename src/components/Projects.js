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
    <div className={'main-content start ' + fade}  style={{ marginLeft: (leftWidth) + (naviWidth)}}>
      <div className='container'>
        프로젝트
      </div>
    </div>
  )
}

export default Profile