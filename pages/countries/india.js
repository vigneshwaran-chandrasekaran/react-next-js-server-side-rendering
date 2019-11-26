import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

function India() {
  const [count, setCount] = useState(0);

  function handleBtnClick() {
    setCount(count + 1);
    console.log("handleBtnClick", count);
  }

  return (
    <Layout>
      <h1>Welcome to India.js!</h1>
      <button className="btn btn-warning" onClick={handleBtnClick}>
        Click me {count}
      </button>
    </Layout>
  );
}

export default India;
