import Image from "next/image";
import saladLeft from "../../../public/img/salladLeft.png";
import saladRight from "../../../public/img/salladRight.png";
import ItemCardMenu from "./menu/ItemCardMenu";
import SectionHeader from "./SectionHeader";

function Main() {
  return (
    <section className="my-20">
      {/* salad leaves */}
      <div className="absolute left-0 right-0 ">
        {/* saladLeft */}
        <div className="absolute -left-0 -top-8">
          <Image src={saladLeft} width={109} height={189} alt="Salad Foto" />
        </div>

        {/* saladRight */}
        <div className="absolute -top-12 right-0">
          <Image src={saladRight} width={107} height={195} alt="Salad Foto" />
        </div>
      </div>

      <SectionHeader
        subHeader={"Schauen Sie sich"}
        mainHeader={"unsere Speisekarte an"}
      />

      <div className="grid grid-cols-3 gap-8">
        <ItemCardMenu />
        <ItemCardMenu />
        <ItemCardMenu />
        <ItemCardMenu />
        <ItemCardMenu />
        <ItemCardMenu />
      </div>
    </section>
  );
}

export default Main;
