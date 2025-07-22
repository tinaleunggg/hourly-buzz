import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Features</div>
      <div>Happy Hour now</div>
      <Link href="/restaurants"><div>All restaurants</div></Link>
    </main>
  );
}
