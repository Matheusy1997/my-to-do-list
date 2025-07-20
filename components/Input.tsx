import { FormEvent } from "react";

interface InputProps {
  onSave: () => void;
  idChange: (n: number) => void;
  textChange: (n: string) => void;
}

export default function Input({ onSave, idChange, textChange }: InputProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap bg-white border rounded"
    >
      <input
        className="w-2/4 m-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
        type="number"
        placeholder="ID"
        min={0}
        required
        onChange={(e) => idChange(Number(e.target.value))}
      />

      <input
        className="w-full m-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
        type="text"
        placeholder="To-do"
        required
        onChange={(e) => textChange(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out m-3"
      >
        Save
      </button>
    </form>
  );
}
