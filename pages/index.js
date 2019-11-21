import Link from "next/link";

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <h1>Welcome to Next.js!</h1>
    </div>
  );
}

export default Home;
