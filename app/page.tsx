import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="glow-title">Stow</h1>

      <p className="title-desc">
        A visual inventory and organization web app.
      </p>

      <p className="stow-description">
        Keep track of what you own, effortlessly
      </p>

      <div className="text-center">
        <Link href="/dashboard" className="get-started">
          Get Started
        </Link>
      </div>
    </main>
  );
}
