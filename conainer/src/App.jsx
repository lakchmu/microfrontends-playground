import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from "./Pages/Dashboard";
import Navbar from "./general/Navbar";

import './app.css';

const ExcuseGeneratorService = React.lazy(() => import('excuseGeneratorApp/ExcuseGenerator'));


export default function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen grid grid-rows-[64px_1fr_100px]'>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="min-w-fit min-h-full bg-white text-gray-800 p-4">
          <React.Suspense fallback={'Loading'}>
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="excuse-generator" element={<ExcuseGeneratorService />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </React.Suspense>
        </main>

        {/* Footer */}
        <footer className="bg-teal-50 text-gray-900 p-4 text-center">
          <p>2024 Excuses Generator. All rights unreserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
