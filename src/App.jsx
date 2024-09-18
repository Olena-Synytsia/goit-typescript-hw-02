import { useState } from "react";
// import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div>
      <h2>APP</h2>
      <SearchBar setQuery={setQuery} />
    </div>
  );
}

export default App;
