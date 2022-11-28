import "./App.css";
import TodoContainer from "./components/TodoContainer";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <div className="container">
        <TodoContainer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
