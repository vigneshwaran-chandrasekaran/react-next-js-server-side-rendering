import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Rates from "../components/Rates";

function Home(props) {
  return (
    <Layout>
      <h1>Welcome to Next.js!</h1>
      <Rates rates={props.currencyRates} />
    </Layout>
  );
}

Home.getInitialProps = async function() {
  const currencyRates = await fetch("https://api.exchangeratesapi.io/latest")
    .then(r => r.json())
    .then(data => data);
  return {
    currencyRates
  };
};

export default Home;
