import React from "react";
import { HomePage } from "./components/HomePage/HomePage";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;