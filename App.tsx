import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import NoPage from './Pages/NoPage';

import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NoPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
