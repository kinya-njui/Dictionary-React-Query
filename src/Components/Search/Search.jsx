import useNewWord from "../Store/newWord";
import { useState } from "react";
import "./Search.css";

function Search() {
  const [input, setWordInput] = useState("");

  const inputWord = useNewWord((state) => state.setWord);

  const handleButtonSearch = (e) => {
    e.preventDefault();
    inputWord(input);
  };
  return (
    <div>
      <div className="form-group">
        <label htmlFor="word" className="label-form-group"></label>
        <input
          type="text"
          className="input-form-group"
          value={input}
          onChange={(e) => setWordInput(e.target.value)}
        />
      </div>
      <label htmlFor="" className="form-group-label"></label>
      <button onClick={handleButtonSearch}>Search</button>
    </div>
  );
}

export default Search;
