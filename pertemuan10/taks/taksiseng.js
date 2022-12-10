/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mulai mendownload...");
    }, 1000);
  });
};

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */
const download = (callShowDownload) => {
  setTimeout(function () {
    const result = "windows-10.exe";
    callShowDownload(result);
  }, 3000);
};

download(showDownload);

// const main = async () => {
//   console.log(await persiapan());
//   console.log(await rebusAir());
//   console.log(await masak());
// };

// main();

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
