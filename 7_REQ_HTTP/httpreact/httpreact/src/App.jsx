import "./App.css";

import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]); // Salvando os produtos

  const [name, setName] = useState(""); // iniciando os dados
  const [price, setPrice] = useState(""); // iniciando os dados

  // 1 - Resgatando dados
  useEffect(() => {
    // Feito pelo Gustavo
    /*const fetchData = async () => {
      const res = await fetch(url); // Recebendo a requisição
      const data = await res.json(); // Transformando o json em objeto
      setProducts(data);
    };
    fetchData();*/
    async function fetchData() {
      const res = await fetch(url); // Recebendo a requisição

      const data = await res.json(); // Transformando o json em objeto

      setProducts(data);
    }

    fetchData();
  }, []);

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    // constante recebe o evento "e"
    e.preventDefault();

    const product = {
      name,
      price,
    };
    // Enviando os dados da requisição
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            {products.name} - R$: {products.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
