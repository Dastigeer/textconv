import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import './App.css';

function App() {


  return (
    <>
    <div className="nav">
     <Navbar title="textUtils"  />
    </div>
    <div className="container">
      <TextForm heading="Enter text here" />
    </div>
    </>
  )
}

export default App
