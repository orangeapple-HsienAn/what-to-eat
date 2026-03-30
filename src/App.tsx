import { useState, useCallback } from 'react'
import ResultDisplay from './components/ResultDisplay'
import ItemList from './components/ItemList'
import ItemInput from './components/ItemInput'
import Toast from './components/Toast'

const DEFAULT_ITEMS = ["便當", "牛肉麵", "水餃", "漢堡", "壽司", "火鍋", "沙拉", "義大利麵", "燒肉飯", "便利商店"]

function App() {
  const [items, setItems] = useState<string[]>(DEFAULT_ITEMS)
  const [selectedItem, setSelectedItem] = useState<string>("")
  const [isSpinning, setIsSpinning] = useState(false)
  const [toastMessage, setToastMessage] = useState<string>("")
  const [showToast, setShowToast] = useState(false)

  const showToastMessage = useCallback((message: string) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }, [])

  const handleAddItem = useCallback((newItem: string) => {
    const trimmed = newItem.trim()
    if (trimmed) {
      setItems(prev => [...prev, trimmed])
    } else {
      showToastMessage("請輸入食物名稱！")
    }
  }, [showToastMessage])

  const handleRemoveItem = useCallback((index: number) => {
    if (items.length <= 1) {
      showToastMessage("至少要留下一個選項喔！")
      return
    }
    setItems(prev => prev.filter((_, i) => i !== index))
  }, [items.length, showToastMessage])

  const handleReset = useCallback(() => {
    setItems(DEFAULT_ITEMS)
    setSelectedItem("")
  }, [])

  const handleSpin = useCallback(() => {
    if (isSpinning) return
    if (items.length === 0) {
      showToastMessage("名單空空的喔！")
      return
    }

    setIsSpinning(true)
    setSelectedItem("")

    let counter = 0
    const maxTicks = 20
    const interval = setInterval(() => {
      const randomItem = items[Math.floor(Math.random() * items.length)]
      setSelectedItem(randomItem)

      counter++
      if (counter >= maxTicks) {
        clearInterval(interval)
        const finalChoice = items[Math.floor(Math.random() * items.length)]
        setSelectedItem(finalChoice)
        setIsSpinning(false)
      }
    }, 80)
  }, [items, isSpinning, showToastMessage])

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <div className="max-w-md mx-auto px-4 py-12">
        {/* 標題區 */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-orange-600 mb-2">今天要吃什麼？</h1>
          <p className="text-gray-500">別再猶豫了，交給命運來決定吧！</p>
        </header>

        {/* 結果顯示區 */}
        <ResultDisplay
          selectedItem={selectedItem}
          isSpinning={isSpinning}
          onSpin={handleSpin}
        />

        {/* 自定義名單區 */}
        <div className="bg-white rounded-3xl shadow-md p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            我的候選名單
          </h2>

          <ItemInput onAdd={handleAddItem} />
          <ItemList items={items} onRemove={handleRemoveItem} />

          <div className="mt-6 pt-6 border-t border-gray-100">
            <button
              onClick={handleReset}
              className="text-sm text-gray-400 hover:text-red-500 transition-colors"
            >
              重設為預設名單
            </button>
          </div>
        </div>

        {/* 訊息彈窗 */}
        <Toast message={toastMessage} show={showToast} />
      </div>
    </div>
  )
}

export default App
