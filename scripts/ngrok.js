import { spawn } from 'child_process';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Lấy đường dẫn thư mục hiện tại
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load biến môi trường từ file .env
dotenv.config({ path: resolve(__dirname, '..', '.env') });

const token = process.env.YOUR_TOKEN_HERE;

if (!token) {
  console.error('ERROR: Ngrok token not found in environment variables');
  console.error('Please make sure YOUR_TOKEN_HERE is set in your .env file');
  process.exit(1);
}

console.log('Starting ngrok with authentication...');
console.log(`Token: ${token.substring(0, 10)}...`);

// Sử dụng spawn thay vì exec để xử lý tốt hơn
const ngrokProcess = spawn('npx', ['ngrok', 'http', '5173', '--authtoken', token], {
  stdio: 'inherit', // Chia sẻ stdio với terminal
  shell: true
});

ngrokProcess.on('error', (error) => {
  console.error('Failed to start ngrok:', error);
});

ngrokProcess.on('close', (code) => {
  console.log(`ngrok process exited with code ${code}`);
});