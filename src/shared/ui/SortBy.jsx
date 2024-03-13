import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [seacrhParams, setSearchParams] = useSearchParams();

  const sortBy = seacrhParams.get("sortBy") || "";

  function handleChange(e) {
    seacrhParams.set("sortBy", e.target.value);
    setSearchParams(seacrhParams);
  }

  return <Select options={options} onChange={handleChange} value={sortBy} />;
}

export default SortBy;
