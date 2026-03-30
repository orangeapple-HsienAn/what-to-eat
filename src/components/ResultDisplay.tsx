interface ResultDisplayProps {
  selectedItem: string
  isSpinning: boolean
  onSpin: () => void
}

export default function ResultDisplay({ selectedItem, isSpinning, onSpin }: ResultDisplayProps) {
  const getResultHint = () => {
    if (isSpinning) return "好運降臨中..."
    if (selectedItem) return "今天就決定是這個了！"
    return "點擊下方按鈕開始"
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 text-center border-b-8 border-orange-500 relative overflow-hidden">
      {isSpinning && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          正在挑選中...
        </div>
      )}

      <div className="py-10">
        <span
          className={`text-5xl font-extrabold block mb-4 transition-all ${
            selectedItem && !isSpinning
              ? 'text-orange-600 scale-110'
              : 'text-gray-700'
          }`}
        >
          {selectedItem || "？"}
        </span>
        <p className="text-gray-400">{getResultHint()}</p>
      </div>

      <button
        onClick={onSpin}
        disabled={isSpinning}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl text-xl shadow-lg transition-all active:scale-95 focus:outline-none"
      >
        幫我決定！
      </button>
    </div>
  )
}
