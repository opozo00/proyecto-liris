'use client'
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios.get("http://localhost:5000")
      .then(res => setMessage(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Sistema onboard de empleados de <b>LIRIS S.A.</b> 🚀</h1>
      <p>{message}</p>
    </div>
  );
}
