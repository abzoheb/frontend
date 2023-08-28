import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">Achivements</a>
        <a href="#">History</a> 
        <a href="#">Reset</a>
        <a href="#">Turn off</a>
      </div>
      <div id="main">
        <button class="openbtn" onclick="openNav()">&#9776;</button>
      </div>
      <div className='cols'>
        <div className='column'>
          <div>
            <img className='image'  src='./images/Exercise.png' alt="Cinque Terre" width="140" height="100" />
            <div className='index_button' ><div><b>PHYSICAL EXERCISE</b></div></div>
          </div>
          <div>
            <img className='image' src='./images/healthy_diet.png' alt='read' width="140" height="100"/>
            <div className='index_button'><div><b>HEALTHY DIET</b></div></div>
          </div>
          <div>
            <img className='image' src='./images/learning.png' alt='eat' width="140" height="100" />
            <div className='index_button'><div><b>STUDY</b></div></div>
          </div>
        
          <div>
            <img className='image' src='./images/meditation.png' alt='run' width="140" height="100" />
            <div className='index_button'><div><b>MEDITATION </b></div></div>
          </div>
          <div>
            <img className='image' src='./images/sleep.png' alt='smoke' width="140" height="100" />
            <div className='index_button'><div><b>SLEEP</b></div></div>
          </div>
          <div>
            <img className='image' src='./images/water.png' alt='teeth' width="140" height="100"  />
            <div className='index_button'><div><b>WATER </b></div></div>
          </div>
          <div>
            <img className='image' src='./images/hygiene.png' alt='zo' width="140" height="100"  />
            <div className='index_button'><div><b> HYGIENE</b></div></div>
          </div>
          <div>
          <img className='image' src='./images/prayer.png' alt='zo' width="140" height="100"  />
            <div className='index_button'><div><b> prayer</b></div></div>
            <b></b> 
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
