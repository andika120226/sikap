"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Logika sementara untuk simulasi login ke dashboard
    if (username && password) {
      router.push("/dashboard");
    } else {
      alert("Mohon masukkan NIK dan Password!");
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      
      {/* 1. BACKGROUND GAMBAR & EFEK GELAP */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/background_login.png')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. KONTAINER UTAMA (LAYOUT DUA KOLOM / SPLIT SCREEN) */}
      <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 items-center gap-8 p-6 lg:grid-cols-2">
        
        {/* Kolom Kiri: Teks Branding SIKAP */}
        <div className="text-white space-y-4 px-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-200 uppercase bg-blue-900/60 rounded-full border border-blue-400/30">
            Secure Application Project
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
            SIKAP
          </h1>
          <p className="text-lg font-medium text-gray-200">
            Sistem Kependudukan Aman dan Terproteksi
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Platform pelayanan data kependudukan berbasis web dengan fokus keamanan aplikasi, kontrol akses ketat, dan enkripsi data sensitif.
          </p>
        </div>

        {/* Kolom Kanan: Card Form Login (Glassmorphism) */}
        <div className="w-full max-w-md mx-auto p-8 space-y-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white">Sign In</h2>
            <p className="text-xs text-gray-200">Masukkan kredensial Anda untuk masuk ke sistem.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-200 uppercase tracking-wider">NIK / Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2.5 mt-1 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Contoh: 3201123456780001"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-200 uppercase tracking-wider">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 mt-1 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-200 shadow-lg cursor-pointer"
            >
              SIGN IN
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}