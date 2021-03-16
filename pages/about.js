import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Create Next App</title>
      </Head>

      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
}
