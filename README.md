# 📍**Live Website** : https://scorue-splitbill.netlify.app/ <br><br>


**Website "Split Bill"**

---

# Split Bill 💲

**Split Bill** adalah website sederhana yang memungkinkan Anda untuk membagi tagihan dengan teman-teman Anda. Aplikasi ini dirancang untuk membantu Anda mengelola pengeluaran bersama dengan teman-teman, menambahkan teman baru, dan melacak hutang mereka.

## Fitur

- **Daftar Teman**: Menampilkan daftar teman yang terlibat dalam pembagian tagihan, lengkap dengan nama dan gambar profil.
- **Tambah Teman**: Formulir untuk menambahkan teman baru dengan nama dan foto mereka.
- **Pilih Teman**: Kemampuan untuk memilih teman dari daftar untuk membagi tagihan dengan mereka.
- **Menghitung Tagihan**: Fitur untuk menghitung jumlah tagihan dengan teman yang dipilih dan memperbarui saldo mereka.

## Teknologi yang Digunakan

- **React.js**: Library JavaScript untuk membangun antarmuka pengguna yang dinamis.
- **useState**: Hook React untuk mengelola state lokal pada komponen.
- **Crypto**: Digunakan untuk membuat UUID unik untuk setiap teman yang ditambahkan.

## Instalasi

1. Clone repository ini ke direktori lokal Anda:

   ```bash
   git clone https://github.com/username/SplitBill.git
   ```

2. Arahkan ke direktori proyek:

   ```bash
   cd SplitBill
   ```

3. Install dependencies menggunakan npm atau yarn:

   ```bash
   npm install
   ```

   atau

   ```bash
   yarn install
   ```

4. Jalankan aplikasi:

   ```bash
   npm start
   ```

   atau

   ```bash
   yarn start
   ```

5. Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat aplikasi berjalan.

## Cara Menggunakan

1. **Menambahkan Teman**:
   - Klik tombol **"Add Friend"** untuk membuka formulir penambahan teman.
   - Masukkan nama teman dan tautan gambar mereka (opsional, default gambar akan diisi).
   - Klik tombol **"Add Friend"** untuk menambahkan teman ke daftar.

2. **Memilih Teman**:
   - Klik pada salah satu teman dalam daftar untuk memilih mereka sebagai penerima pembagian tagihan.
   - Saat teman dipilih, formulir untuk membagi tagihan akan muncul.

3. **Membagi Tagihan**:
   - Masukkan jumlah tagihan yang ingin dibagi.
   - Saldo teman yang dipilih akan diperbarui berdasarkan jumlah yang dimasukkan.

4. **Menutup Formulir**:
   - Klik tombol **"Close"** untuk menutup formulir penambahan teman jika tidak ingin menambah teman baru.

## Struktur Proyek

```
├── public
├── src
│   ├── components
│   │   ├── FriendList.js        // Komponen untuk menampilkan daftar teman
│   │   ├── FormAddFriend.js     // Formulir untuk menambahkan teman baru
│   │   ├── FormSplitBill.js     // Formulir untuk membagi tagihan dengan teman
│   ├── App.js                   // Komponen utama aplikasi
│   ├── index.js                 // Entry point aplikasi
├── README.md
├── package.json
```

## Komponen Utama

### 1. `App.js`
Komponen utama aplikasi yang mengatur logika untuk menambahkan teman, memilih teman, dan membagi tagihan.

### 2. `FriendList.js`
Menampilkan daftar teman dengan gambar profil dan saldo mereka.

### 3. `FormAddFriend.js`
Formulir untuk menambahkan teman baru dengan nama dan gambar profil opsional.

### 4. `FormSplitBill.js`
Formulir untuk membagi tagihan dengan teman yang dipilih.
