# Tantangan: Callback Part 2

Diberikan tiga buah file json untuk dibaca:
- `data1.json`
- `data2.json`
- `data3.json`

Buatlah sebuah fungsi dengan nama `bacaData` yang menerima sebuah parameter `fnCallback`.

Fungsi bacaData ini akan membaca 3 file json yang diberikan, kemudian akan memberikan hasil (data) kepada `fnCallback` berupa `array of string` dari message yang sudah dimodifikasi:
- data1.json => `halo dunia` => hasil yang diambil adalah `dunia`
- data2.json => `halo world` => hasil yang diambil adalah `world`
- data3.json => `halo sekai` => hasil yang diambli adalah `sekai`

fnCallback ini sendiri memiliki 2 parameter:
  - `err` => error yang dapat ditemukan
  - `data` => hasil dari proses baca file json (hasilAkhir)
      - didapat dengan menggabungkan ketiga hasil yang ditemukan dari data1, data2, dan data3 kemudian dijadikan sebagai array of string
      - Contoh dari hasil di atas, berdasar data1.json, data2.json, dan data3.json, `data`-nya adalah `['dunia', 'world', 'sekai']`
      
Ketentuan:
- Kata yang diambil adalah kata kedua dari `message` yang diberikan
- (asumsi kata yang diberikan selalu lebih dari sama dengan 2)
- Perhatikan struktur file json yang diberikan, karena struktur file jsonnya tidak sama
- Wajib menggunakan `fs.readFile` (tidak boleh menggunakan fs.readFileSync)
- File yang digunakan untuk menjalankan program adalah `index.js`
- Menuliskan fungsi `bacaData` pada file `fungsiCustom.js`