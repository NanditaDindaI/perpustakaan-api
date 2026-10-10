
import { supabase } from '../config/supabaseClient.js';

// Mengambil semua data peminjaman
export async function getAllLoans(status) {
  let query = supabase
    .from('loans')
    .select('*');

  // Filter berdasarkan status jika status diberikan
  if (status) {
    query = query.eq('status', status);
  }

  return await query.order('created_at', { ascending: false });
}

// Mengambil satu data peminjaman berdasarkan ID
export async function getLoanById(id) {
  return await supabase
    .from('loans')
    .select('*')
    .eq('id', id)
    .maybeSingle();
}

// Menambahkan data peminjaman
export async function createLoan(loanData) {
  return await supabase
    .from('loans')
    .insert([loanData])
    .select()
    .single();
}

// Mengubah data peminjaman berdasarkan ID
export async function updateLoan(id, loanData) {
  return await supabase
    .from('loans')
    .update(loanData)
    .eq('id', id)
    .select()
    .maybeSingle();
}

// Menghapus data peminjaman berdasarkan ID
export async function deleteLoan(id) {
  return await supabase
    .from('loans')
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle();
}
