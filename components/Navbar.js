import Link from "next/link";

function Navbar() {
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
      {/* this below css is for this components only */}
      <style jsx>{`
        ul {
          display: flex;
          background: #ccc;
          list-style: none;
        }
        ul li {
          font-size: 18px;
          margin: 10px;
        }
        ul li a {
          color: red;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}

export default Navbar;
