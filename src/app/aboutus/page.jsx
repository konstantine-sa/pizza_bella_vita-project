import SectionHeader from "@/components/Layout/SectionHeader";
import Image from "next/image";
import mainFoto from "../../../public/img/chef-holding-wooden-plate-with-delicious-pizza-it-kitchen.jpg";

function AboutUs() {
  return (
    <section className="my-20 text-justify">
      <SectionHeader subHeader={"Unsere Geschichte"} mainHeader={"über uns"} />
      <div className="flex flex-col gap-4 max-w-2xl mx-auto mt-4 text-secondaryText text-lg">
        <Image
          className="w-full h-auto my-8"
          src={mainFoto}
          alt="Foto des Koch mit Pizza"
        />
        <p>
          Unsere Geschichte beginnt mit der Leidenschaft für die traditionelle
          italienische Küche. Jedes Rezept wird sorgfältig von Generation zu
          Generation weitergegeben, und jede Zutat wird mit Bedacht ausgewählt,
          um höchste Qualität und Geschmack zu gewährleisten.
        </p>
        <p>
          In unserer Pizzeria erleben Sie nicht nur den Genuss exquisiter
          Pizzen, sondern auch die Wärme einer familiären Atmosphäre. Wir laden
          Sie ein, Teil unserer Geschichte zu werden und gemeinsam mit uns die
          Freude am guten Essen zu teilen. Willkommen bei uns – wo Geschmack auf
          Tradition trifft.
        </p>
        <p>
          Unser Service geht über die Grenzen unseres gemütlichen Restaurants
          hinaus. Neben der Möglichkeit, das authentische Ambiente bei uns zu
          genießen, bieten wir auch die bequeme Option, unsere köstlichen Pizzen
          nach Hause oder ins Büro zu bestellen.
          <br /> Egal, ob Sie eine private Feier planen oder einen kulinarischen
          Genuss am Arbeitsplatz suchen – wir bringen den Geschmack Italiens
          direkt zu Ihnen. <br />
          Erleben Sie die Bequemlichkeit und den Geschmack unserer Pizzen, wo
          immer Sie sind.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
