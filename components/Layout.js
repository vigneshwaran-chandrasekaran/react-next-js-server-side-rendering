import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>React-Next-SSE</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/materia/bootstrap.min.css"
        ></link>
        {/* <link
          rel="stylesheet"
          href="https://bootswatch.com/_assets/css/custom.min.css"
        ></link> */}
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
}
