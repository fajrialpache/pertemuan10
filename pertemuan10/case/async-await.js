const persiapan = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Persiapan...");
    }, 3000);
  });
};

const rebusAir = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Rebus Air...");
    }, 7000);
  });
};

const masak = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Memasak...");
    }, 3000);
  });
};

const main = async () => {
  console.log(await persiapan());
  console.log(await rebusAir());
  console.log(await masak());
};

main();
