"use client";

import { useState } from "react";

export default function AuditPage() {
  // Data simulasi log audit keamanan aplikasi SIKAP
  const [auditLogs] = useState([
    { id: 1, user: "Admin Kelurahan (Role: Admin)", aksi: "Mengakses & Mendekripsi Data NIK Warga", ip: "192.168.1.10", status: "Diizinkan (RBAC Valid)", waktu: "Baru saja" },
    { id: 2, user: "Warga Biasa (Role: User)", aksi: "Mencoba Akses Endpoint Profil Warga Lain (ID: 02)", ip: "192.168.1.45", status: "Diblokir (Mitigasi IDOR)", waktu: "15 menit lalu" },
    { id: 3, user: "Petugas Loket (Role: Operator)", aksi: "Enkripsi Data At-Rest (AES-256) untuk KK Baru", ip: "192.168.1.15", status: "Berhasil", waktu: "1 jam lalu" },
    { id: 4, user: "Tidak Dikenal (Guest)", aksi: "Mencoba Akses Halaman Admin Tanpa Token", ip: "203.0.113.42", status: "Ditolak (Unauthorized 401)", waktu: "3 jam lalu" },
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-slate-800">Log Audit Keamanan Aplikasi (Security Audit Trail)</h3>
        <p className="text-xs text-slate-500">
          Fitur pencatatan aktivitas akses data untuk mencegah kebocoran informasi pribadi dan memantau percobaan celah keamanan.
        </p>
      </div>

      {/* Kartu Informasi Materi Keamanan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl space-y-1">
          <h4 className="text-xs font-bold text-indigo-700 uppercase">Kontrol Akses (RBAC)</h4>
          <p className="text-xs text-indigo-900">Memastikan hanya role tertentu yang dapat mengakses menu atau data sensitif tertentu.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl space-y-1">
          <h4 className="text-xs font-bold text-blue-700 uppercase">Mitigasi IDOR</h4>
          <p className="text-xs text-blue-900">Mencegah pengguna memanipulasi parameter ID di URL untuk mencuri data warga lain.</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl space-y-1">
          <h4 className="text-xs font-bold text-emerald-700 uppercase">Enkripsi Data (At-Rest)</h4>
          <p className="text-xs text-emerald-900">Menjaga kerahasiaan NIK dan nomor KK agar tidak terbaca langsung di database.</p>
        </div>
      </div>

      {/* Tabel Log Audit */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-xs font-bold text-slate-600 uppercase">
              <th className="p-4">Pengguna / Role</th>
              <th className="p-4">Aktivitas & Upaya Akses</th>
              <th className="p-4">Alamat IP</th>
              <th className="p-4">Status Keamanan</th>
              <th className="p-4">Waktu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {auditLogs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50">
                <td className="p-4 font-semibold text-slate-900">{log.user}</td>
                <td className="p-4 text-slate-700">{log.aksi}</td>
                <td className="p-4 font-mono text-xs text-slate-500">{log.ip}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                    log.status.includes("Berhasil") || log.status.includes("Valid") 
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                      : "bg-amber-50 text-amber-700 border border-amber-200"
                  }`}>
                    {log.status}
                  </span>
                </td>
                <td className="p-4 text-xs text-slate-400">{log.waktu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}