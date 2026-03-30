interface ItemListProps {
  items: string[]
  onRemove: (index: number) => void
}

export default function ItemList({ items, onRemove }: ItemListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="item-chip bg-orange-50 text-orange-700 px-3 py-1 rounded-lg text-sm flex items-center border border-orange-100"
        >
          <span>{item}</span>
          <button
            onClick={() => onRemove(index)}
            className="ml-2 text-orange-300 hover:text-orange-600 focus:outline-none"
            aria-label={`移除 ${item}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}
