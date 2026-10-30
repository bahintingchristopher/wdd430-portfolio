"use client";

import {useState, useEffect} from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto text-center">
        <p>Copyright &copy; {year} | Christopher T. Bahinting | All rights reserved</p>
      </div>
    </footer>
  );
}