
import { Router } from 'express';

import {
  getLoans,
  getLoan,
  addLoan,
  editLoan,
  removeLoan
} from '../controllers/loanController.js';

const router = Router();

// Mengambil semua data, bisa difilter berdasarkan status
router.get('/', getLoans);

// Mengambil satu data berdasarkan ID
router.get('/:id', getLoan);

// Menambahkan data peminjaman
router.post('/', addLoan);

// Mengubah data peminjaman berdasarkan ID
router.put('/:id', editLoan);

// Menghapus data peminjaman berdasarkan ID
router.delete('/:id', removeLoan);

export default router;
