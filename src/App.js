import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='column'>
        <div>
          <img src='./images/dog.png' alt='dog' />
        </div>
        <div>
          <img src='./images/read.png' alt='read' />
        </div>
        <div>
          <img src='./images/eat.png' alt='eat' />
        </div>
      </div>
      <div className='column'>
        <div>
          <img src='./images/run.png' alt='run' />
        </div>
        <div>
          <img src='./images/smoke.png' alt='smoke' />
        </div>
        <div>
          <img src='./images/teeth.png' alt='teeth' />
        </div>
      </div>
    </div>
  );
}

export default App;
