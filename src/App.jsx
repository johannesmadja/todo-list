import "./App.css";

import TodoProvider from "./components/provider/TodoProvider";
import TodoFeatures from "./components/TodoFeatures";

function App() {
  return (
    <TodoProvider>
      <TodoFeatures />
    </TodoProvider>
  );
}

export default App;
