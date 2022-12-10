const persiapan = () => {
  setTimeout(function () {
    console.log("persiapan...");
  }, 3000);
};

const rebusSAir = () => {
  setTimeout(function () {
    console.log("Rebus Air...");
  }, 7000);
};

const masak = () => {
  setTimeout(function () {
    console.log("Memasak Mie...");
    console.log("Selesai");
  }, 3000);
};

persiapan();
rebusSAir();
masak();
