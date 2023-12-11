function SectionHeader({ subHeader, mainHeader }) {
  return (
    <div className="mt-14 text-center">
      <h3 className="uppercase text-secondaryTitle font-semibold text-2xl ">
        {subHeader}
      </h3>
      <h2 className="text-primary font-bold text-4xl">{mainHeader}</h2>
    </div>
  );
}

export default SectionHeader;
