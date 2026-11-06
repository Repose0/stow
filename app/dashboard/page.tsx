"use client";

import { useRef } from "react";

export default function Dashboard() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <main className="min-h-screen p-8">
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Your Inventory
        </h1>

        <h2 className="mt-3 text-xl text-gray-400">
          Keep track of what you own.
        </h2>
      </div>

      <button
        onClick={() => fileInputRef.current?.click()}
        className="bg-white text-black text-lg px-5 py-3 rounded-xl hover:bg-gray-200 transition-colors"
      >
        Add Item
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        hidden
      />
    </main>
  );
}