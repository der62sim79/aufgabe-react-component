import "./App.css";
import ButtonRow from "./components/ButtonRow";
import SuperButton from "./components/SuperButton";
import VoteList from "./components/VoteList";
import Vote from "./components/Votes";

function App() {
  return (
    <div className="App">
      <h1>Hallo</h1>
      <SuperButton />
      <ButtonRow />
      <VoteList />
    </div>
  );
}

export default App;
