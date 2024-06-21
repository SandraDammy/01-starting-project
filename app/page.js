import Link from "next/link";
import Header from "@/app/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let's get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
      <p>
        <Link href="/blog">Blog Post</Link>
      </p>
      <p>
        <Link href="/meals">Meals Page</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meal Page</Link>
      </p>
      <p>
        <Link href="/community">community</Link>
      </p>
    </main>
  );
}
