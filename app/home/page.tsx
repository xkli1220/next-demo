import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Image
        src="/next-demo/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
        />
    </main>
  )
}