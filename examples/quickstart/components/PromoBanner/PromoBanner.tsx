// components/PromoBanner/PromoBanner.tsx
import Image from "next/image";

export function PromoBanner() {
  return (
    <section className="relative mx-auto mt-28 flex flex-col items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl text-white font-bold drop-shadow-[0_0_25px_rgba(22,204,255,0.6)]">
        ¡Comprá tu cupón ahora!
      </h1>
      <p className="text-white opacity-80 text-lg mt-4 max-w-2xl">
        Participá en nuestros juegos blockchain, ganá premios y vendé tu cupón NFT en el marketplace. ¡Tu suerte puede valer más de lo que imaginás!
      </p>

      <Image
        src="/arrow.svg"
        alt="Arrow pointing to the connect wallet button"
        className="absolute scale-y-[-1] hidden md:block md:bottom-[-65px] md:right-[-95px]"
        width={130}
        height={130}
      />
    </section>
  );
}
