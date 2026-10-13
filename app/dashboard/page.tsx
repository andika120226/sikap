export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg space-y-2">
        <span className="px-3 py-1 bg-white/20 text-xs font-semibold rounded-full uppercase tracking-wider">
          Fase 1: Struktur Multi-File
        </span>
        <h3 className="text-2xl font-bold">Selamat Datang di Portal SIKAP</h3>
        <p className="text-indigo-100 text-sm max-w-xl leading-relaxed">
          Setiap menu di panel kiri kini berada di file dan URL terpisah, memudahkan pengelolaan dan penerapan fitur keamanan aplikasi di tahap berikutnya.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <p className="text-xs font-medium text-slate-500 uppercase">Total Warga Terdaftar</p>
          <h4 className="text-2xl font-bold text-slate-800">1,482 Jiwa</h4>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <p className="text-xs font-medium text-slate-500 uppercase">Pengajuan Dokumen</p>
          <h4 className="text-2xl font-bold text-slate-800">24 Berkas</h4>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <p className="text-xs font-medium text-slate-500 uppercase">Status Keamanan</p>
          <h4 className="text-2xl font-bold text-indigo-600">Arsitektur Modular</h4>
        </div>
      </div>
    </div>
  );
}