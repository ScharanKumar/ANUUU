import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import Home from "./components/Home"
import TodoList from "./components/TodoList"
const App = ()=>{
  return (
    <>
    <BrowserRouter>
    <Header/>
    {/* <Switch> */}
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/TodoList' Component={TodoList}/>
    </Routes>
    {/* </Switch> */}
    </BrowserRouter>
     

    </>
  )
}
export default App;
