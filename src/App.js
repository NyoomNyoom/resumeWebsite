import './App.css';

function App() {
  let bodyContent = <HomeBody />;

  function Navbar() {
    function OnHomeClicked() {
      bodyContent = <HomeBody />;
    }

    function OnPortfolioClicked() {
      bodyContent = <PortfolioBody />
    }
  
    return (
      <nav>
        <button onClick={OnHomeClicked}>HOME</button>
        <button onClick={OnPortfolioClicked}>PORTFOLIO</button>
      </nav>
    )
  }
  
  function HomeBody() {
    return (
      <h1>Welcome to my portfolio</h1>
    )
  }

  function PortfolioBody() {
    return (
      <h1>This is my portfolio</h1>
    )
  }

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <body>
        {bodyContent}
      </body>
      <footer>
        <p>Thank you for reading :)</p>
      </footer>
    </div>
  );
}

export default App;
