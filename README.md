# Proyek API Ulasan Film - Kelompok 7

## Anggota kelompok
- Dino Febiyan
- Cheryl Aurellya B.J
- Rusydi Jabir Al Awfa

## Deskripsi Proyek
Api ini adalah layanan internal untuk mengelola ulasan film dari Studio Ghibli.Studio Ghibli API sendiri adalah sebuah layanan RESTful API yang didalamnya menyediakan data terkait film-film yang diproduksi oleh Stdio Ghibli,termasuk detail film seperti judul, deskripsi, director, produser serta tanggal dari film mereka.

## Cara Menjalankan Proyek
1. Clone repostiroty ini: `git clone https://github.com/jabiralawfaa/api-ulasan-film.git`

2. Masuk ke direktori: `cd projekIntero_ghibli\api-ulasan-film`

3. Install dependensi: 

4. Jalankan server: `node server.js`

Server akan berjalan di `http://localhost:3300`

## Daftar Endpoint
- `GET /status`: Cek status API.
- `GET /reviews`: Mengambil semua ulasan.
- `GET /reviews/:id`: Mengambil ulasan dengan spsifik id
- `POST /reviews`: Membuat ulasan baru
- `PUT /reviews:id`: Memperbarui ulasan bersadarkan id
- `DELETE /reviews:id`: Mengahapus ulasan bersadarakan id

