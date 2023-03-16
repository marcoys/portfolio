import '../scss/navigation.scss';

function Navigation({ leftWidth }) {
  return (
    <div className='navigation' style={{ marginLeft: (leftWidth)}}>
      <ul>
        <li className='on'>PRFILE</li>
        <li>SKILL</li>
        <li>PROJECTS</li>
      </ul>
    </div>
  )
}

export default Navigation