import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/img/logo_temp.png";

function Header() {
  return (
    <header className="">
      <div className="flex items-center">
        <Image className="w-20" alt="logo Bild" src={logo}></Image>
        {/* <Link className="font-semibold text-2xl text-main" href={""}>
          {`Pizza `}
          <span className="text-primary">Bella Vita</span>
        </Link> */}
        <div className=" flex flex-col ml-14 mr-2 ">
          <div className="flex text-lg font-semibold ">
            <p className="mr-[6px]">Pizza-Lieferung</p>
            <span className="text-primary">Erlangen</span>
          </div>
          <div className="flex items-center font-bold text-sm">
            <p>Lieferzeit </p>
            <div className="w-1 h-1 mx-2 bg-rose-500 rounded-full" />
            <p>ab 20 Minuten</p>
          </div>
        </div>
        {/* <Link
          className="ml-auto bg-primary text-main font-semibold px-8 py-2 rounded-full"
          href={""}
        >
          Anmelden
        </Link> */}
        <button className="flex justify-center items-center ml-auto w-40 h-[42px] bg-primary rounded-lg font-semibold">
          Warenkorb
          <div className="mx-2 w-0.5 h-[23px] bg-stone-800 rounded-[5px]" />
          <p>1</p>
        </button>
      </div>
      <nav className="flex items-center gap-8 mt-5 text-main text-lg font-semibold ">
        <Link
          className="link link-underline link-underline-black text-black"
          href={""}
        >
          Pizza
        </Link>
        <Link
          className="link link-underline link-underline-black text-black"
          href={""}
        >
          Salate
        </Link>
        <Link
          className="link link-underline link-underline-black text-black"
          href={""}
        >
          Getränke
        </Link>
        <Link
          className="link link-underline link-underline-black text-black"
          href={""}
        >
          Desserts
        </Link>
        <Link
          className="link link-underline link-underline-black text-black"
          href={""}
        >
          Aktionen
        </Link>
        <Link
          className="link link-underline link-underline-black text-black"
          href={""}
        >
          Über&nbsp;uns
        </Link>
        <Link
          className="link link-underline link-underline-black text-black"
          href={""}
        >
          Kontakt
        </Link>
        <Link
          className="ml-auto mr-12 font-bold text-mainGray link link-underline link-underline-black text-black"
          href={""}
        >
          Anmelden
        </Link>
      </nav>
    </header>
  );
}

export default Header;
