import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <body>
        <HomeBody />
      </body>
    </div>
  );
}

function Navbar() {
  function OnHomeClicked() {
    console.log("hi")
  }

  return (
    <nav>
      <button onClick={OnHomeClicked}>HOME</button>
    </nav>
  )
}

function HomeBody() {
  return (
    <h1>Welcome to my portfolio</h1>
  )
}

export default App;
