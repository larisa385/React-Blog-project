import Navbar from './navbar';
import Home from './home';
import './index.css';

function App() {
  const title = 'welcome to the project';
  const likes = 50;
  const link = "http://www.google.com"

  return (
    <div className="App">
      <Navbar />
      <div>{ title }</div>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
