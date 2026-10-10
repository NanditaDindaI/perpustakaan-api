
import {
  getAllLoans,
  getLoanById,
  createLoan,
  updateLoan,
  deleteLoan
} from '../models/loanModel.js';

// GET /loans — mengambil semua data peminjaman
export async function getLoans(req, res) {
  try {
    const { status } = req.query;
    const { data, error } = await getAllLoans(status);

    if (error) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// GET /loans/:id — mengambil satu data peminjaman
export async function getLoan(req, res) {
  try {
    const { id } = req.params;
    const { data, error } = await getLoanById(id);

    if (error) {
      return res.status(500).json({ message: error.message });
    }

    if (!data) {
      return res.status(404).json({
        message: 'Data peminjaman tidak ditemukan'
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// POST /loans — menambahkan data peminjaman
export async function addLoan(req, res) {
  try {
    const {
      member_name,
      book_title,
      loan_date,
      due_date,
      status
    } = req.body;

    if (!member_name || !book_title || !due_date) {
      return res.status(400).json({
        message: 'member_name, book_title, dan due_date wajib diisi'
      });
    }

    const loanData = {
      member_name,
      book_title,
      due_date
    };

    if (loan_date) loanData.loan_date = loan_date;
    if (status) loanData.status = status;

    const { data, error } = await createLoan(loanData);

    if (error) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(201).json({
      message: 'Data peminjaman berhasil ditambahkan',
      data
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// PUT /loans/:id — mengubah data peminjaman
export async function editLoan(req, res) {
  try {
    const { id } = req.params;
    const {
      member_name,
      book_title,
      loan_date,
      due_date,
      status
    } = req.body;

    const loanData = {};

    if (member_name !== undefined) loanData.member_name = member_name;
    if (book_title !== undefined) loanData.book_title = book_title;
    if (loan_date !== undefined) loanData.loan_date = loan_date;
    if (due_date !== undefined) loanData.due_date = due_date;
    if (status !== undefined) loanData.status = status;

    if (Object.keys(loanData).length === 0) {
      return res.status(400).json({
        message: 'Tidak ada data yang dikirim untuk diubah'
      });
    }

    const { data, error } = await updateLoan(id, loanData);

    if (error) {
      return res.status(500).json({ message: error.message });
    }

    if (!data) {
      return res.status(404).json({
        message: 'Data peminjaman tidak ditemukan'
      });
    }

    return res.status(200).json({
      message: 'Data peminjaman berhasil diubah',
      data
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// DELETE /loans/:id — menghapus data peminjaman
export async function removeLoan(req, res) {
  try {
    const { id } = req.params;
    const { data, error } = await deleteLoan(id);

    if (error) {
      return res.status(500).json({ message: error.message });
    }

    if (!data) {
      return res.status(404).json({
        message: 'Data peminjaman tidak ditemukan'
      });
    }

    return res.status(200).json({
      message: 'Data peminjaman berhasil dihapus',
      data
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
