const persiapan = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Persiapan...");
    }, 3000);
  });
};

const rebusSAir = () => {
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

const main = () => {
  persiapan()
    .then((res) => {
      console.log(res);
      return rebusSAir();
    })
    .then((res) => {
      console.log(res);
      return masak();
    })
    .then((res) => {
      console.log(res);
    });
};

main();
