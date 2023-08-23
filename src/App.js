import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div id="main">
        <button class="openbtn" onclick="openNav()">&#9776; MENU</button>
      </div>
      <div></div>
      <div className='column'>
        <div>
          <img src='./images/Exercise.png' alt='dog' />
          <button className='index_button' ><div><b>EXERCISE</b></div></button>
        </div>
        <div>
          <img src='./images/healthy_diet.png' alt='read' />
          <button className='index_button'><div><b>HEALTHY DIET</b></div></button>
        </div>
        <div>
          <img src='./images/learning.png' alt='eat' />
          <button className='index_button'><div><b>LEARNING</b></div></button>
        </div>
      </div>
      <div className='column'>
        <div>
          <img src='./images/meditation.png' alt='run' />
          <button className='index_button'><div><b>MEDITATION</b></div></button>
        </div>
        <div>
          <img src='./images/sleep.png' alt='smoke' />
          <button className='index_button' ><div><b>SLEEP</b></div></button>
        </div>
        <div>
          <img src='./images/water.png' alt='teeth' />
          <button className='index_button'><div><b>WATER</b></div></button>
        </div>
        <div>
          <img src='./images/hygiene.png' alt='zo' />
          <button className='index_button'><div><b>HYGIENE</b></div></button>
        </div>
        <div>
          {/* <img src='' alt='sd'/> 
          <b></b> */}
        </div>
      </div>
    </div>
  );
}

export default App;
