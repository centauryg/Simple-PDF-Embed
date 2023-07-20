import './App.css'
import { EmbedPDF } from '@simplepdf/react-embed-pdf';

export default function App() {
  return (
    <main>
      <h1>MyRepublic PDF Editor Website</h1>
      <p>Input dan sesuaikan informasi dengan kolom yang tersedia📄</p>
      <p>Klik link dibawah ini untuk edit PDF 👇</p>
      <ul>
        <li>
        <EmbedPDF companyIdentifier="dundermifflin">
           <button>Upload PDF</button>
        </EmbedPDF>
        </li>
      </ul>
    </main>
  )
}