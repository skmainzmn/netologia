import ThemeItem from './ThemeItem'

function ThemeList({ items }) {
  return (
    <div className="max-w-sm p-4 border-4 border-black">
      <div className="pb-4 text-3xl font-medium border-b">
        Изучайте
        <span className="text-blue-500"> актуальные темы </span>
      </div>
      { items.map((item, key) => <ThemeItem key={key} item={item} />) }
    </div>
  )
}

export default ThemeList
