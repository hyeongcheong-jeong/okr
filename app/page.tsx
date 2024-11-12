import Link from "next/link";

export default function Home() {
  return (
    <section className="flex justify-center items-center container px-1">
      <h1 className="">OKR</h1>
      <Link href="/invension">코딩 인벤션</Link>
    </section>
  );
}
