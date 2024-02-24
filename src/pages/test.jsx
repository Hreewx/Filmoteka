import { useState } from "react";
import supabase from "../shared/api/supabase";

function SearchUserInput() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      const { data, error } = await supabase
        .from("profile")
        .select("login")
        .ilike("login", `%${value}%`);
      if (error) {
        console.error("Ошибка при поиске пользователя", error);
      } else {
        setSearchResults(data);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result.login}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchUserInput;
