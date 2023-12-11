import Image from "next/image";

import pizzaItemImg from "../../../../public/img/pizzaDemo.png";

function ItemCardMenu() {
  return (
    <div
      className="flex flex-col items-center max-w-[293px] p-5 mt-14 rounded-md group hover:shadow-lg hover:bg-primary/10 cursor-pointer
     hover:scale-105 duration-150 "
    >
      <Image
        className="w-[253px] h-[253px]"
        src={pizzaItemImg}
        alt="Das Foto des Pizzas"
      />
      <h4 className="text-2xl font-extrabold text-secondaryTitle mt-2 ">
        PIZZA MARGHERITA
      </h4>
      <p className="text-sm text-secondaryText font-medium mt-4 text-center">
        Pizzateig mit Tomatensauce und echtem Gouda-Käse. Satte 52 cm Diagonale,
        frei nach Deinem Geschmack belegbar!
      </p>

      {/* price & add button */}
      <div className="flex justify-between items-center w-full mt-6">
        <p className="text-xl font-bold text-main">von 9 €</p>
        <button className="buttonCardItemYellow">Hinzufügen</button>
      </div>
    </div>
  );
}

export default ItemCardMenu;
