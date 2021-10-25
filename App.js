import logo from "./logo.svg";
import "./App.css";
let name="Prashil"
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laborum
        blanditiis rerum harum quia asperiores quidem voluptatum quod velit
        consequatur perspiciatis quaerat ducimus sequi est ipsum eos ea totam
        minus, esse dolor, repellendus maxime ad.
      </div>
    </>
    // <div className="blank">Lovely Website</div>
  );
}

export default App;
