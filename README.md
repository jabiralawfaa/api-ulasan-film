# Proyek API Ulasan Film - Kelompok 7

## Anggota kelompok
- Dino Febiyan
- Cheryl Aurellya Bangun Jaya
- Rusydi Jabir Al Awfa

## Deskripsi Proyek
Proyek ini adalah proyek pembuatan ulasan film dari studio Ghibli API. Studio Ghibli API sendiri adalah sebuah layanan RESTful API yang didalamnya menyediakan data terkait film-film yang diproduksi oleh Stdio Ghibli, termasuk detail film seperti judul, deskripsi, director, produser serta tanggal dari film mereka.

## Cara Menjalankan Proyek
1. Clone repository ini dengan masuk ke cmd dan tulis: `git clone https://github.com/jabiralawfaa/api-ulasan-film.git`
![clone repo](image/image.png)

2. Setelah itu, masuk ke direktori proyek lewat cmd dengan menulis: `cd projekIntero_ghibli\api-ulasan-film`
![change directory lewat cmd](image/image-1.png)

atau jika tidak, langsung masuk  ke code editor dan pilih directory api-studio-film
![masuk lewat code editor](image/image-2.png)

3. Setelah masuk ke proyek lalu install dependensi dengan menulis:  `npm install`
![instal dependencie](image/image-3.png)

jika sudah muncul folder dibawah ini maka sudah aman:
![node modules](image/image-4.png) 

4. Anda bisa menjalankan server dengan menulis: `node server.js`
![menjalankan server](image/image-5.png)

Server akan berjalan di `http://localhost:3300`

## Daftar Endpoint
- `GET /status`: Cek status API
![cek status api](image/image-6.png)

- `GET /reviews`: Mengambil semua ulasan
![mengambil semua contoh ulasan](image/image-7.png)

- `GET /reviews/:id`: Mengambil ulasan dengan id
![mengambil ulasan dengan id](image/image-8.png)

- `POST /reviews`: Membuat ulasan baru
![membuat ulasan baru](image/image-9.png)
![cek ulasan](image/image-10.png)

- `PUT /reviews:id`: Memperbarui ulasan bersadarkan id
![edit ulasam](image/image-11.png)
![cek hasil edit](image/image-12.png)

- `DELETE /reviews:id`: Mengahapus ulasan bersadarakan id
![hapus ulasan](image/image-13.png)
![cek seluruh ulasan](image/image-14.png)
