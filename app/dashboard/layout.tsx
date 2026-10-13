"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800">
      
      {/* SIDEBAR UTAMA (Tetap) */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col justify-between hidden md:flex border-r border-slate-800">
        <div>
          <div className="p-6 border-b border-slate-800 flex items-center space-x-3">
            <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
              S
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-wider">SIKAP</h1>
              <p className="text-xs text-slate-400">Panel Kependudukan</p>
            </div>
          </div>

          <nav className="p-4 space-y-1">
            <Link
              href="/dashboard"
              className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                pathname === "/dashboard" ? "bg-indigo-600 text-white shadow-sm" : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <span>📊</span>
              <span>Dashboard Utama</span>
            </Link>
            <Link
              href="/dashboard/ktp"
              className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                pathname === "/dashboard/ktp" ? "bg-indigo-600 text-white shadow-sm" : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <span>🪪</span>
              <span>Layanan KTP-el</span>
            </Link>
            <Link
              href="/dashboard/kk"
              className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                pathname === "/dashboard/kk" ? "bg-indigo-600 text-white shadow-sm" : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <span>👨‍👩‍👧‍👦</span>
              <span>Kartu Keluarga (KK)</span>
            </Link>
            <Link
              href="/dashboard/audit"
              className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                pathname === "/dashboard/audit" ? "bg-indigo-600 text-white shadow-sm" : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <span>🛡️</span>
              <span>Audit Keamanan & RBAC</span>
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white rounded-lg transition text-sm font-medium border border-red-500/30 cursor-pointer"
          >
            <span>🚪</span>
            <span>Keluar Sistem</span>
          </button>
        </div>
      </aside>

      {/* KONTEN UTAMA YANG BERUBAH-UBAH */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10 shadow-xs">
          <div>
            <h2 className="text-lg font-bold text-slate-800">Sistem Layanan Kependudukan SIKAP</h2>
            <p className="text-xs text-slate-500">Aplikasi Berfokus Keamanan Data Warga</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-700">Administrator</p>
              <p className="text-xs text-emerald-600 font-medium">● Sesi Aman</p>
            </div>
            <div className="h-10 w-10 bg-indigo-100 text-indigo-700 font-bold rounded-full flex items-center justify-center border border-indigo-200">
              AD
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>

    </div>
  );
}