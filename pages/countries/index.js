import { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../../components/Layout";

function Countries() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let a = getDataFromServer();
    console.log({ a });
  }, [count]);

  function handleBtnClick() {
    setCount(count + 1);
    console.log("handleBtnClick", count);
  }

  async function getDataFromServer() {
    const currencyRates = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${count}`
    )
      .then(r => r.json())
      .then(data => data);
    return {
      currencyRates
    };
  }

  return (
    <Layout>
      <h1>Welcome to Countries.js!</h1>
      <button className="btn btn-warning" onClick={handleBtnClick}>
        Click me {count}
      </button>
    </Layout>
  );
}

export default Countries;
