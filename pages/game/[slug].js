import Layout from "../../components/layout/Layout";
import Head from "../../components/layout/Head";
import axios from "axios";
import { BASE_URL } from "../../constants/api";

export default function Game({ game }) {
  return (
    <Layout>
      <Head title={game.name} />
      <h1>{game.name}</h1>
      <img src={game.image} />
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    // the same API call we used in `index.js`
    // we want to get all the slugs from the array of games
    // so first we need to fetch the games
    const response = await axios.get(BASE_URL);
    // the log here will happen on the server, you can check the console in your editor
    console.log(response.data);
    // the array is on the response.data.data property
    const games = response.data.data;

    // Get the paths we want to pre-render based on the slugs in the games
    const paths = games.map((game) => ({
      params: { slug: game.slug },
    }));

    console.log(paths);

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `${BASE_URL}/${params.slug}`;

  let game = null;

  try {
    const response = await axios.get(url);
    // the value we want is on response.data here, not response.data.data
    game = response.data;
  } catch (error) {
    console.log(error);
  }

  // we are sending a prop called game in to the Game component up above
  return {
    props: { game: game },
  };
}
