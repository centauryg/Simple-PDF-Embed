import './App.css'
import { EmbedPDF } from '@simplepdf/react-embed-pdf';

export default function App() {
  return (
    <main>
      <h1>MyRepublic PDF Editor Website</h1>
      <p>Bungkus elemen HTML apa pun dengan <span className="highlight">&#60;EmbedPDF&#62;</span> untuk membukanya menggunakan SimplePDF 📄</p>
      <p>Klik link dibawah ini untuk edit PDF 👇</p>
      <ul>
        {/* <li>
          <EmbedPDF>
            <a href="https://cdn.simplepdf.eu/simple-pdf/assets/example_en.pdf">An example</a>
          </EmbedPDF>
        </li> */}
        <li>
        <EmbedPDF companyIdentifier="dundermifflin">
            <center><button>Custom PDF Editor</button></center>
        </EmbedPDF>
        </li>
      </ul>
      
      <p><i>Read more about <span className="highlight">@simplepdf/react-embed-pdf</span> <a href="https://github.com/bendersej/simplepdf-react" className="readMoreLink" target="_blank">here</a></i></p>
    </main>
  )
}