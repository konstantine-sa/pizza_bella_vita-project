import Link from "next/link";

function Header() {
  return (
    <header className="">
      <div className="flex items-center">
        <Link className="font-semibold text-2xl text-main" href={""}>
          {`Pizza `}
          <span className="text-primary">Bella Vita</span>
        </Link>
        <div className="flex font-semibold ml-14">
          <p className="mr-2">Pizza-Lieferung</p>
          <span className="text-primary">Erlangen</span>
        </div>
      </div>
      <nav className="flex items-center gap-8 text-main text-lg font-semibold">
        <Link href={""}>Startseite</Link>
        <Link href={""}>Speisekarte</Link>
        <Link href={""}>Über uns</Link>
        <Link href={""}>Kontakt</Link>
        <Link className="bg-primary text-main px-8 py-2 rounded-full" href={""}>
          Anmelden
        </Link>
      </nav>
    </header>
  );
}

export default Header;
