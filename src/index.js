
import express from 'express';
import loanRoutes from './routes/loanRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Membaca request body dalam format JSON
app.use(express.json());

// Endpoint untuk mengecek apakah API berjalan
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API Peminjaman Buku berjalan!'
  });
});

// Semua route peminjaman diawali /loans
app.use('/loans', loanRoutes);

// Menjalankan server saat dijalankan secara lokal
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
  });
}

// Mengekspor aplikasi untuk Vercel
export default app;
