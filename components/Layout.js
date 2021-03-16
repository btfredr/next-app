import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Link href="/">
            <a style={{ marginRight: "1rem" }}>Home</a>
          </Link>
          <Link href="/about">
            <a style={{ marginRight: "1rem" }}>About</a>
          </Link>
          <Link href="/game">
            <a style={{ marginRight: "1rem" }}>Game</a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Layout;
