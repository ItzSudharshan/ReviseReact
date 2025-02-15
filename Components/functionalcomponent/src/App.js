import Home from './Home';

function App() {
  // Declare the variable outside the return
  let name = 'Sudharshan Nayak';
  
  return (
    <>
      <h1>Hello {name}</h1>
      <Home product="Samsung M35" price="18000" />
    </>
  );
}

export default App;

