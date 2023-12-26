export default function HomeLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="h-full flex flex-col ov">
      <div className="w-full h-[60px] px-[20px] flex  items-center bg-[#eee]">顶部</div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}