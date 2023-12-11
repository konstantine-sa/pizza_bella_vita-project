import SectionHeader from "./SectionHeader";
import Image from "next/image";

import logo from "../../../public/img/logo_temp.png";

function Footer() {
  return (
    <footer className="pt-8">
      <div className="grid grid-cols-2 ">
        <div className="">
          <Image className="w-20" alt="logo Bild" src={logo}></Image>
          <p className="mt-9 text-main text-base font-bold">
            Wir sind in sozialen Netzwerken:
          </p>
          <div className="flex gap-8 my-4 text-secondaryTitle text-base font-semibold">
            <button className="cursor-pointer hover:text-main link-underline link-underline-black link-underline">
              YouTube
            </button>
            <button className="cursor-pointer hover:text-main link-underline link-underline-black link-underline">
              Facebook
            </button>
            <button className="cursor-pointer hover:text-main link-underline link-underline-black link-underline">
              Instagram
            </button>
          </div>
        </div>
        <div>
          <p className="mt-9 text-main text-base font-bold">
            Haben Sie noch Fragen? Wir sind immer erreichbar:
          </p>
          <p className="mt-8 text-primary text-3xl font-bold uppercase ">
            8 499 391-84-49
          </p>
          <button className="mt-5 bg-buttonLightGray py-2 px-7 rounded-full text-sm font-bold text-secondaryTitle">
            Rückruf bestellen
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
