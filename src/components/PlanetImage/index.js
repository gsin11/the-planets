import Image from "next/image";

const PlanetImage = ({ slug, activeCategory }) => {
  console.log(activeCategory);
  return (
    <div className="relative w-80 h-80 md:w-96 max-w-full md:h-96 mx-auto lg:top-16">
      <Image
        src={`/static/images/${slug}-planet.png`}
        layout="fill"
        objectFit="cover"
        quality="100"
      />
      {activeCategory === "internal" && (
        <Image
          src={`/static/images/overlay-planet.png`}
          layout="fill"
          objectFit="cover"
          quality="100"
        />
      )}
    </div>
  );
};

export default PlanetImage;
