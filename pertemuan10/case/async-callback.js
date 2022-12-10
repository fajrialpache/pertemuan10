const persiapan = () => {
  console.log("persiapan...");
};

const rebusSAir = () => {
  console.log("Rebus Air...");
};

const masak = () => {
  console.log("Memasak Mie...");
  console.log("Selesai");
};

const main = () => {
  setTimeout(() => {
    persiapan();
    setTimeout(() => {
      rebusSAir();
      setTimeout(() => {
        masak();
      }, 3000);
    }, 7000);
  }, 3000);
};

main();
