import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="w-full flex flex-col gap-8 items-center justify-center min-h-screen bg-stone-200">
      <Image
        src="/images/banner.jpg"
        width={300}
        height={300}
        className="md:w-[400px]"
        alt="banner"
      />
      <Link
        href="/game"
        className="text-2xl font-light uppercase underline underline-offset-8 text-blue-900"
      >
        click me to start
      </Link>
      <footer className="mt-0 items-center text-blue-900 absolute justify-center bottom-0">
        &copy; {currentYear}{" "}
        <a
          href="https://kmaar.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Abhishek Kumar
        </a>
        . All rights reserved. | Powered by{" "}
        <a
          href="https://kmstudio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          KMaar Miscellaneous Studio
        </a>
      </footer>
    </main>
  );
}
