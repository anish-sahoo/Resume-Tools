import { ThemeProvider } from "next-themes";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <ThemeProvider dark>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
