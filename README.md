# Gemini AI API Implementation - Express.js

Panduan ini akan menjelaskan cara mengimplementasikan API Gemini AI menggunakan Express.js.

## Langkah-langkah:

### 1. Persiapan Lingkungan
- **Buat File `.env`**:
  - Salin file `.env.example` menjadi `.env` di root direktori proyek Anda.
  - Buka file `.env` dan masukkan **`GEMINI_API_KEY`** yang Anda dapatkan dari konsol API Google.

    ```ini
    GEMINI_API_KEY=your-gemini-api-key-here
    ```

    Anda perlu mendaftar dan mendapatkan kunci API Gemini melalui konsol Google Cloud jika belum melakukannya.

### 2. Instalasi Proyek
- **Install Dependencies**:
  Setelah Anda berada di dalam folder proyek, install dependencies yang diperlukan dengan menggunakan npm atau yarn:

    ```bash
    npm install
    ```

    atau jika menggunakan yarn:

    ```bash
    yarn install
    ```

### 3. Menjalankan Server
- **Jalankan Server Express.js**:

    Untuk menjalankan server Express.js di port 3000, gunakan perintah berikut:

    ```bash
    node index.js
    ```

    Server akan berjalan di `http://localhost:3000`.

### 4. API Endpoints
- **Generate Text** (POST: `/api/chat`):
  - Endpoint ini digunakan untuk menghasilkan teks berdasarkan **prompt** yang diberikan oleh pengguna.
  - Kirimkan JSON dengan **prompt**:

    ```json
    {
      "messages": {
        "userMessage": "Tuliskan cerita pendek tentang alam"
      } 
    }
    ```