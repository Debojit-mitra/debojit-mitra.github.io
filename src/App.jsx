import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
