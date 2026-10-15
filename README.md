# Realtime Point of Sales (POS)

Aplikasi Point of Sales (POS) berbasis web modern dan real-time untuk pengelolaan pesanan, menu, dan meja kafe/restoran.

---

## 🛠️ Tech Stack yang Dipakai

Berikut adalah teknologi utama yang digunakan pada proyek ini:

### 1. Frontend & Core
- **[Next.js 15](https://nextjs.org/)** (App Router & Turbopack)
- **[React 19](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**

### 2. UI & Styling
- **[Tailwind CSS v4](https://tailwindcss.com/)**
- **[shadcn/ui](https://ui.shadcn.com/)** & **[@base-ui/react](https://base-ui.com/)**
- **[Lucide React](https://lucide.dev/)** (Icon library)
- **[next-themes](https://github.com/pacocoursey/next-themes)** (Tema Dark / Light mode)
- **[Sonner](https://sonner.emilkowal.ski/)** (Toast notifikasi)

### 3. State Management & Data Fetching
- **[Zustand](https://zustand-demo.pmnd.rs/)** (Client state management)
- **[TanStack React Query v5](https://tanstack.com/query/latest)** (Server state management & caching)

### 4. Form & Validasi
- **[React Hook Form](https://react-hook-form.com/)**
- **[Zod](https://zod.dev/)**
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)**

### 5. Backend, Database & Autentikasi
- **[Supabase](https://supabase.com/)** (Database PostgreSQL, Supabase Auth, Realtime & Storage)
- **[@supabase/ssr](https://supabase.com/docs/guides/auth/server-side/nextjs)** & **[@supabase/supabase-js](https://supabase.com/docs/reference/javascript/introduction)**

---

## 🚀 Cara Menjalankan di Local

Ikuti langkah-langkah berikut untuk mencoba dan menjalankan proyek ini di komputer lokal:

### 1. Prasyarat (Prerequisites)
Pastikan beberapa tool berikut sudah terinstal di komputer Anda:
- **Node.js** (versi 20 atau versi LTS terbaru yang didukung)
- **Package Manager** (`npm`, `pnpm`, atau `yarn`)
- Akun **[Supabase](https://supabase.com/)** (untuk database dan autentikasi)

### 2. Clone Repository & Masuk ke Folder Proyek
```bash
git clone <url-repository-anda>
cd realtime-point-of-sales
```

### 3. Install Dependencies
Jalankan perintah berikut untuk mengunduh seluruh package yang dibutuhkan:
```bash
npm install
```

### 4. Konfigurasi Environment Variables
1. Salin file `env.example` menjadi `.env.local`:
   - **Linux / macOS**:
     ```bash
     cp env.example .env.local
     ```
   - **Windows (PowerShell)**:
     ```powershell
     Copy-Item env.example .env.local
     ```
2. Buka file `.env.local` lalu isi dengan konfigurasi kredensial dari project Supabase Anda:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
   SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
   ```

### 5. Setup Database Supabase (Eksekusi Migrasi SQL)
Buka dashboard Supabase Anda, masuk ke menu **SQL Editor**, lalu jalankan query SQL yang ada di dalam folder `src/migrations/` secara berurutan:

1. `src/migrations/001-auth-profiles.sql` (Tabel profil user & trigger otomatis saat registrasi user auth)
2. `src/migrations/002-menu.sql` (Tabel menu makanan & minuman)
3. `src/migrations/003-table.sql` (Tabel meja restoran)
4. `src/migrations/004-order.sql` (Tabel orders dan relasi item pesanan `orders_menus`)

### 6. Jalankan Development Server
Mulai server development menggunakan perintah:
```bash
npm run dev
```

### 7. Akses Aplikasi
Buka browser Anda dan kunjungi:
```
http://localhost:3000
```

---

## 📜 Perintah Lain yang Tersedia

- `npm run dev` : Menjalankan development server menggunakan Turbopack.
- `npm run build` : Melakukan compile dan build aplikasi untuk environment produksi.
- `npm run start` : Menjalankan server aplikasi hasil build produksi.
- `npm run lint` : Menjalankan pemeriksaan kode menggunakan ESLint.

