import './App.css';
import Add from './Components/Add';
import Completed from './Components/Completed';
import Projects from './Components/Projects';

function App() {
  return (
    <div className='main'>
      <div className='d-flex justify-content-between mt-5'>
        <div className="projects col-lg-6 ms-4 p-3">
          <div className='d-flex justify-content-between'>
            <h2> <i className="fa-solid fa-arrow-down-short-wide fa-flip-horizontal"></i> Projects... </h2>
            <div><Add /></div>
          </div>
          <Projects />
        </div>
        <div className="complete col-lg-3 p-4 border">
          <h3> <i className="fa-solid fa-list-check"></i> Completed </h3>
          <Completed />
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
}

export default App;
