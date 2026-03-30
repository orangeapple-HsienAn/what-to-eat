import { useState } from 'react'

interface ItemInputProps {
  onAdd: (item: string) => void
}

export default function ItemInput({ onAdd }: ItemInputProps) {
  const [inputValue, setInputValue] = useState("")

  const handleAdd = () => {
    onAdd(inputValue)
    setInputValue("")
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div className="flex mb-4 gap-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="新增想吃的..."
        className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
      />
      <button
        onClick={handleAdd}
        className="bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-700 transition-colors"
      >
        新增
      </button>
    </div>
  )
}
