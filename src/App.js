import logo from './logo.svg';
import './App.css';
import BoardClass from "./components/BoardClass";

function App() {
    return (
        <div className="game">
            <div className={"game-board"}>
                <BoardClass/>
            </div>
            <div className={"game-info"}>
                game-info
            </div>
        </div>
    );
}

export default App;
