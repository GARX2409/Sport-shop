import React from "react";

type Props = {
  onSearch: (category: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <button onClick={() => onSearch("")}>Todos</button>
      <button onClick={() => onSearch("Equipamiento")}>Equipamiento</button>
      <button onClick={() => onSearch("Ropa")}>Ropa</button>
      <button onClick={() => onSearch("Calzado")}>Calzado</button>
    </div>
  );
};

export default SearchBar;
