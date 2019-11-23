import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

function Home(props) {
  return (
    <Layout>
      <h1>Welcome to Next.js!</h1>
      {console.log(props)}
    </Layout>
  );
}

Home.getInitialProps = async function() {
  const currencyRates = await fetch("https://api.exchangeratesapi.io/latest")
    .then(r => r.json())
    .then(data => {
      console.log(data);
      return data;
    });

  return {
    currencyRates
  };
};

export default Home;
