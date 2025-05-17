# Tabel Users

### Kolom

| Nama Kolom | Tipe Data | Deskripsi |
|------------|-----------|-----------|
| id | SERIAL PRIMARY KEY | ID unik pengguna |
| username | TEXT UNIQUE NOT NULL | Username pengguna |
| full_name | TEXT NOT NULL | Nama lengkap pengguna |
| email | TEXT UNIQUE NOT NULL | Email pengguna |
| password | TEXT NOT NULL | Password terenkripsi |
| role | TEXT DEFAULT 'pengelola' | Role pengguna: `pengguna`, `pengelola`, `admin`, `dinas` |
| is_verified | BOOLEAN DEFAULT FALSE | Status apakah akun sudah diverifikasi oleh admin |
| created_at | TIMESTAMP DEFAULT CURRENT_TIMESTAMP | Waktu pembuatan akun |