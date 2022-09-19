import './App.css'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import 'react-calendar/dist/Calendar.css';
import Background from "./components/Background";
import ReactCal from "./components/ReactCal";

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<Background/>}/>
            <Route exact path="/calendar" element={<ReactCal/>}/>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
