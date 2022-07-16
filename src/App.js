import './App.css';

function App() {
  return (
    <div id='wrapper' className="flex flex-col w-full items-center">
      <div className='flex w-full bg-slate-300 justify-center p-2'>
        <h1>Weather Dashboard</h1>
      </div>
      <div className='flex flex-col items-center bg-red-100 h-screen p-2'>
        <div>
          <h3>Search for a City:</h3>
        </div>
        <div>
          <input placeholder='Toronto' />
        </div>
        <div>
          <button>Search</button>
        </div>
        <div className='flex w-full border border-slate-300' />
      </div>
    </div>
  );
}

export default App;
