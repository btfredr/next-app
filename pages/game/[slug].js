export const getStaticPaths = async () => {
  try {
    // the same API call we used in index.js
    // we want to get all the slugs from the array of games
    // so first we need to fetch the games
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    const games = response.data.data;

    const paths = games.map((game) => ({
      params: { slug: game.slug },
    }));

    console.log(paths);
  }
};
