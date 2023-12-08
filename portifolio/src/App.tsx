import './styles/components/app.sass';
import MainContent from "./components/MainContent";
import Sidebar from './components/sidebar';

function App() {
  

  return (
    <>
      <div id='portifolio'>
          <h1>Kelvin Silveira</h1>
          <Sidebar></Sidebar>
          <MainContent></MainContent>
      </div>
     
    </>
  )
}

export default App
