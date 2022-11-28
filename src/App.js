import "./App.css";
import TodoContainer from "./components/TodoContainer";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <div className="container">
      <DarkModeProvider>
        <TodoContainer />
      </DarkModeProvider>
    </div>
  );
}

export default App;
