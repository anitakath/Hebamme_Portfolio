export const getServerSideProps = async () => {
  const res = await fetch("https://swapi.dev/api/people/");

  if (!res.ok) {
    console.log("something went wrong here");
  }

  console.log(res);

  const data = await res.json();

  console.log(data.results);

  return {
    props: { data },
  };
};

getServerSideProps();
