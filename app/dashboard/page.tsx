
"use client";

import { useRef, useState } from "react";

type InventoryItem = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export default function Dashboard() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<InventoryItem[]>([]);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  }

  function handleAddItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!imagePreview || !itemName.trim()) {
      return;
    }

    const newItem: InventoryItem = {
      id: crypto.randomUUID(),
      name: itemName.trim(),
      description: description,
      image: imagePreview,
    };

    setItems((currentItems) => [...currentItems, newItem]);

    setImagePreview(null);
    setItemName("");
    setDescription("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

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
        onChange={handleFileChange}
        hidden
      />

      {imagePreview && (
        <form onSubmit={handleAddItem} className="mt-8 max-w-md">

          <img
            src={imagePreview}
            alt="Selected item"
            className="w-64 h-64 object-cover rounded-xl mb-5"
          />

          <div className="mb-4">
            <label className="block mb-2">
              Item Name
            </label>

            <input
              type="text"
              value={itemName}
              onChange={(event) => setItemName(event.target.value)}
              placeholder="Enter item name"
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2">
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Enter a description (optional)"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
            />
          </div>

          <button
            type="submit"
            className="bg-white text-black px-5 py-3 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Add to Inventory
          </button>

        </form>
      )}

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">
          Your Items ({items.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="mt-2 text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        {items.length === 0 && (
          <p className="text-gray-500 mt-6">
            No items added yet.
          </p>
        )}

      </div>

    </main>
  );
}
