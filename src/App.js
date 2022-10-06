import pic from './Images/download.jfif';
import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1>Exercise 2</h1>
          <h1>card view </h1>
      <div class="cards">
    <article class="card">
        <header>
            <h2>React</h2>
        </header>    
        <center>
        <img src={pic} alt="logo"/>
        </center>
        <div class="content">
            <p> React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</p>
            <footer>
        <button className='button'>Learn React</button>
        </footer>
        <br></br>
        </div>
            
    </article>           
   
</div>
            
</center>
<br></br>
<br></br>
      </header>
    </div>
  );
}

export default App;