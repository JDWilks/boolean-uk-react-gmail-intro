import './App.css'

import Header from './components/Header/Header'
import LeftMenu from './components/Leftmenu/Leftmenu'
import EmailView from './components/Main/EmailView'
//import Main from './components/Main/EmailView'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView />
    </div>
  )
}

export default App
