import Image from "next/image";

import pizzaHeroImg from "../../../public/img/pizza_hero.png";
import ArrowRight from "../icons/ArrowRight";

function Hero() {
  return (
    <section className="hero min-h-[85vh]">
      <div className="mr-12">
        <h1 className="text-4xl font-semibold">
          <span className="text-2xl">Die</span>{" "}
          <span className="text-[#58AA40] uppercase">echte</span> <br />{" "}
          <span className="text-[#fff] bg-primary px-2 uppercase">
            italienische
          </span>{" "}
          <br />
          <span className="font-bold text-[#E30901] uppercase text-6xl">
            Pizza
          </span>{" "}
          in&nbsp;Erlangen
        </h1>
        <p className="my-4 text-secondaryTitle text-lg">
          Entdecken Sie den echten Geschmack Italiens in unserer Pizzeria in
          Erlangen. <br /> <br />
          Wir bereiten nur exquisite italienische Pizzen mit frischen und
          hochwertigen Zutaten zu.
        </p>
        <div className="flex gap-4 py-4 text-sm">
          <button className="flex gap-2 items-center bg-primary px-6 py-2 rounded-full font-semibold uppercase ">
            Order now
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="font-semibold text-secondaryTitle">
            Learn more
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src={pizzaHeroImg} alt="Pizza-Foto" objectFit="fill"></Image>
      </div>
    </section>
  );
}

export default Hero;
