function ThemeItem({ item }) {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex flex-col">
        <div className="text-xl font-bold">
          { item.direction?.title }
        </div>
        <div className="text-gray-400">
          XX курсов
        </div>
      </div>
      <div>
        <div className="w-10 h-10 bg-gray-100 rounded-full" />
      </div>
    </div>
  )
}

export default ThemeItem
