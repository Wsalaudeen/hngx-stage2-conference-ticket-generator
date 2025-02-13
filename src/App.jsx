import Navbar from "./components/navbar/navbar";
import Ticketlist from "./components/ticketlist/ticketlist";

function App() {
  return (
    <div
      className="min-h-screen pt-4"
      style={{
        background:
          "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #02191D",
      }}
    >
      <Navbar />
      <Ticketlist />
    </div>
  );
}

export default App;
