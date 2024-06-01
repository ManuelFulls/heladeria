"use client";
import React from "react";
import { Toaster, toast } from "react-hot-toast";

export default function TestToaster() {
  const showToast = () => {
    toast.success("Esto es un mensaje de prueba");
  };

  return (
    <>
      <button onClick={showToast}>Mostrar Toast</button>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
