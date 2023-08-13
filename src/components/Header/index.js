import {Link} from 'react-router-dom'
import "./index.css"

const Header = ()=>{
   return (
    <div className='back'>
      <h1 className='head'>Hello Charan</h1>
      <ul className='con'>
      <li className='con1'>
      <Link to="/" >Home</Link>
      </li>
      <li className='con1'>
      <Link to="/TodoList" >TodoList</Link>
      </li>
      {/* <li>
      <Link to="/" >Home</Link>
      </li> */}
      </ul>
    </div>
   )
}

export default Header