import './App.css';
import Board from './components/Board/Board'
import Title from './components/Title/Title'

const App = () =>
  <div className="App">
    <Title/>
    <Board size={5}/>
  </div>

export default App;
