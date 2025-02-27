import "./App.css";

import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]); // Salvando os produtos

  // 1 - Resgatando dados
  useEffect(async () => {
    const res = await fetch(url); // Recebendo a requisição

    const data = await res.json(); // Transformando o json

    setProducts(data);
  });

  console.log(products);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
    </div>
  );
}

export default App;
