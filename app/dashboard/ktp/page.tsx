export default function KtpPage() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-slate-800">Manajemen Layanan KTP-el</h3>
        <p className="text-xs text-slate-500">Halaman khusus untuk pengajuan dan verifikasi Kartu Tanda Penduduk.</p>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
        <p className="text-sm text-slate-600">Data pemohon KTP-el akan ditampilkan di sini dengan proteksi enkripsi data sensitif (NIK).</p>
      </div>
    </div>
  );
}