# REST API Peminjaman Buku

REST API sederhana untuk mengelola data peminjaman buku menggunakan Node.js, Express, dan Supabase. API ini menyediakan operasi CRUD (Create, Read, Update, Delete) serta fitur filter data berdasarkan status peminjaman.

## Informasi Project

- **Nama:** REST API Peminjaman Buku
- **Backend:** Node.js dan Express
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **Repository GitHub:** https://github.com/NanditaDindaI/perpustakaan-api
- **URL API:** https://perpustakaan-api-theta.vercel.app/

## Fitur

- Menampilkan seluruh data peminjaman buku.
- Menampilkan data peminjaman berdasarkan status.
- Menambahkan data peminjaman baru.
- Mengubah data peminjaman berdasarkan ID.
- Menghapus data peminjaman berdasarkan ID.
- Menyimpan data menggunakan Supabase.

## Struktur Data

API menggunakan tabel `loans` pada database Supabase dengan struktur berikut:

| Kolom | Tipe Data | Keterangan |
|---|---|---|
| `id` | UUID | Primary key dan identitas peminjaman |
| `member_name` | TEXT | Nama anggota peminjam |
| `book_title` | TEXT | Judul buku yang dipinjam |
| `loan_date` | DATE | Tanggal peminjaman |
| `due_date` | DATE | Tanggal jatuh tempo pengembalian |
| `status` | TEXT | Status peminjaman, misalnya `Dipinjam` atau `Dikembalikan` |
| `created_at` | TIMESTAMPTZ | Waktu data dibuat |

Kolom `id` dan `created_at` diisi secara otomatis oleh database apabila default pada tabel telah dikonfigurasi.

## Endpoint API

Base URL:

`https://perpustakaan-api-theta.vercel.app`

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/` | Memeriksa apakah API berjalan |
| GET | `/loans` | Menampilkan semua data peminjaman |
| GET | `/loans?status=Dipinjam` | Memfilter peminjaman berdasarkan status |
| POST | `/loans` | Menambahkan data peminjaman |
| PUT | `/loans/:id` | Memperbarui data peminjaman berdasarkan ID |
| DELETE | `/loans/:id` | Menghapus data peminjaman berdasarkan ID |

## Contoh Request dan Response

### 1. Memeriksa API

**Request**

`GET /`

**Response**

```json
{
  "message": "API Peminjaman Buku berjalan!"
}
```

### 2. Menampilkan Data Peminjaman

**Request**

`GET /loans`

**Contoh Response**

```json
[
  {
    "id": "c54a8850-bcae-4ee9-b916-cd6796408ff3",
    "member_name": "Andi",
    "book_title": "Belajar Jaringan Komputer",
    "loan_date": "2026-10-10",
    "due_date": "2026-10-17",
    "status": "Dipinjam",
    "created_at": "2026-10-10T15:07:24.181743+00:00"
  }
]
```

### 3. Memfilter Data Berdasarkan Status

**Request**

`GET /loans?status=Dipinjam`

Endpoint ini menampilkan data peminjaman yang memiliki status `Dipinjam`.

Contoh URL lengkap:

https://perpustakaan-api-theta.vercel.app/loans?status=Dipinjam

### 4. Menambahkan Data Peminjaman

**Request**

`POST /loans`

Header:

`Content-Type: application/json`

**Request Body**

```json
{
  "member_name": "Budi",
  "book_title": "Pemrograman Node.js",
  "loan_date": "2026-10-10",
  "due_date": "2026-10-17",
  "status": "Dipinjam"
}
```

Data dikirim dalam format JSON. ID dan waktu pembuatan data dihasilkan oleh database jika konfigurasi default telah tersedia.

### 5. Memperbarui Data Peminjaman

**Request**

`PUT /loans/:id`

Ganti `:id` dengan UUID data peminjaman yang ingin diperbarui.

Contoh URL:

`PUT /loans/16a84103-951c-4c7a-954d-8f50e9c4c193`

**Request Body**

```json
{
  "status": "Dikembalikan"
}
```

Contoh response setelah berhasil:

```json
{
  "message": "Data peminjaman berhasil diubah"
}
```

### 6. Menghapus Data Peminjaman

**Request**

`DELETE /loans/:id`

Ganti `:id` dengan UUID data yang ingin dihapus.

Contoh response setelah berhasil:

```json
{
  "message": "Data peminjaman berhasil dihapus"
}
```

## Menjalankan Project Secara Lokal

### Prasyarat

- Node.js dan npm.
- Akun serta project Supabase.
- Git (opsional jika source code sudah tersedia secara lokal).

### 1. Clone Repository

```bash
git clone https://github.com/NanditaDindaI/perpustakaan-api.git
cd perpustakaan-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi Environment Variables

Buat file `.env` di direktori utama project.

Isi menggunakan nama variabel yang sesuai dengan kode di `src/config/supabaseClient.js`:

```env
SUPABASE_URL=URL_PROJECT_SUPABASE
SUPABASE_ANON_KEY=ANON_PUBLIC_KEY_SUPABASE
PORT=3000
```

Ganti nilai contoh dengan URL project dan anon public key milik sendiri. Jangan mengunggah file `.env` atau secret key ke repository publik.

### 4. Jalankan Server

Gunakan perintah yang sesuai dengan script pada `package.json`. Jika tersedia script `start`, jalankan:

```bash
npm start
```

Jika belum tersedia script tersebut, dan file entry point tetap `src/index.js`, server dapat dijalankan dengan:

```bash
node src/index.js
```

Secara default, API lokal dapat diakses melalui:

`http://localhost:3000`

## Deployment

API telah di-deploy menggunakan Vercel dan terhubung dengan database Supabase.

- **URL API:** https://perpustakaan-api-theta.vercel.app/
- **Endpoint peminjaman:** https://perpustakaan-api-theta.vercel.app/loans
- **Filter status:** https://perpustakaan-api-theta.vercel.app/loans?status=Dipinjam

Environment variables Supabase dikonfigurasi melalui pengaturan project Vercel.

## Teknologi yang Digunakan

- Node.js
- Express
- Supabase
- PostgreSQL
- Vercel
- Git dan GitHub

## Tujuan

Project ini dibuat untuk memenuhi responsi Praktikum Pengembangan dan Pemrograman Berbasis Platform (PPB), dengan menerapkan pembuatan REST API, integrasi database, operasi CRUD, filter query, serta deployment aplikasi backend ke platform cloud.
