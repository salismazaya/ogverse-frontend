import "./App.css";
import DevModeInstruction from "./components/DevModeInstruction";
import Navbar from "./components/Navbar";
import DocumentationSection from "./components/DocumentationSection";
import HelloTokenSection from "./components/HelloTokenSection";

function App() {
  return (
    <>
      <div id="connect-btn">
        <radix-connect-button />
      </div>
    </>
  );
}

export default App;
