import './App.css';
import Space from "./space";

function App() {
  return (
      <div>
        <Space start={0} height={100} starType={0}/>
        <Space start={100} height={100} starType={1}/>
      </div>
  );
}

export default App;
