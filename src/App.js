import './App.css';

//komentarz

function App() {
  function pingFunction() {
    alert('hello react')
  }
  return (
    <div className="App">
      <header className="App-header">
        <a href='https://github.com/Arkkow/nauka_DaftCode'>
          repo
        </a>
        <button onClick={pingFunction}>
        Test
        </button>
      </header>
    </div>
  );
}


export default App;