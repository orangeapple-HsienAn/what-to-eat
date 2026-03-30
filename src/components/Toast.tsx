interface ToastProps {
  message: string
  show: boolean
}

export default function Toast({ message, show }: ToastProps) {
  return (
    <div
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-2xl transition-opacity duration-300 z-50 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {message}
    </div>
  )
}
