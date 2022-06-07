// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback)=>{
  let hasilAkhir = [];
  ambilBerkas((err,hasilFile1)=>{
    if (err) {
      return err;
    }
    ambilBerkas((eror,hasilFile2)=>{
      if (eror) {
        return err;
      }
      ambilBerkas((eror,hasilFile3)=>{
        if (eror) {
          return err;
        }
        hasilAkhir.push(ambilPesan(JSON.parse(hasilFile1)));
        hasilAkhir.push(ambilPesan(JSON.parse(hasilFile2)));
        hasilAkhir.push(ambilPesan(JSON.parse(hasilFile3)));
        data = hasilAkhir;
        return fnCallback(err, data);
      },file3);
    },file2);
  },file1);
};

const ambilKata = (katakata) => {
  let hasil = katakata.split(" ");
  return hasil[1];
}

const ambilPesan = (hasilJson) => {
  if (Array.isArray(hasilJson)) {
    if (hasilJson[0].data) {
      return ambilKata(hasilJson[0].data.message);
    }else{
      return ambilKata(hasilJson[0].message);
    }
  }else{
    return ambilKata(hasilJson.message);
  }
}

const ambilBerkas = (fnCallback, berkas) =>{
  const fs = require("fs");
  fs.readFile(
    berkas,
    "utf-8",
    (err,data)=>{
      if (err) {
        return fnCallback(err);
      }else{
        return fnCallback(null,data)
      }
    }
  )
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
