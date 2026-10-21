
export default function Dashboard() {
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

      <button className="bg-white text-black text-lg px-5 py-3 rounded-xl hover:bg-gray-200 transition colors">
        Add Item
      </button>
    </main>
  );
}
