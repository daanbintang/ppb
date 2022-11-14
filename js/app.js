const foto = document.querySelector(".foto");
const bd = document.body;
const Ppb = [
  {
    nama: "Pencot",
    img: "asset/pencot.jpg",
  },
  {
    nama: "Pucuk",
    img: "asset/pucuk.jpeg",
  },
  {
    nama: "Tonggos",
    img: "asset/nandi.jpeg",
  },
  {
    nama: "Encuyy",
    img: "asset/fahmi.jpeg",
  },
  {
    nama: "Monyong",
    img: "asset/daan.jpeg",
  },
];
const el = `
${Ppb.map(
  (i) =>
    `
    <h1 class= "nama">${i.nama}</h1>
    <img src= ${i.img} alt="">
    `
).join("")}
`;
foto.innerHTML = el;
