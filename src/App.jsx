
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import APOD from './Pages/APOD';
import APOW from './Pages/APOW';


export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
          <Route exact path="/UnknownWorld" element={<APOW />} />
          <Route exact path="/UnknownWorld/APOD" element={<APOD />} />
          <Route exact path="/UnknownWorld/MARS" element={<h1>MARS</h1>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
