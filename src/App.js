import "./styles.css";

function Header(props) {
  return (
    <header>
      <h1> {props.name}'s Kitchen! </h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <h2> We serve the most {props.adjective} food around </h2>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <h3> That's True! </h3>
    </footer>
  );
}

export default function App() {
  return (
    <div className="App">
      <Header name="Nasim" />
      <Main adjective="amazing" />
      <Footer />
    </div>
  );
}
