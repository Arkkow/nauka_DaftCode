import './App.css';



function App() {
  function pingFunction() {
    alert('hello react')
  }
  return (
    <div className="App">
      <header className="App-header">
        <a
        >
          <button onClick={pingFunction}>
            Naciśnij mnie!
          </button>
        </a>
      </header>
    </div>
  );
}


export default App;
