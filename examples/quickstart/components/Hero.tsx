"use client";

import Image from "next/image";
import { useAccount } from "wagmi";
import { PromoBanner } from "@/components/PromoBanner/PromoBanner";

export const Hero = () => {
  const { isConnected } = useAccount();

  {
    isConnected && <PromoBanner />;
  }

  return (
    <section className="relative mx-auto mt-28">
      <h1 className="text-7xl text-zinc-100 font-bold text-center">
        Azar en blockchain
      </h1>
      <p className="text-white opacity-70 text-center text-lg mt-4 max-w-2xl mx-auto">
        Participá en juegos de azar descentralizados donde cada jugada es
        segura, transparente y única.
        <br />
        Usá <strong>cupones NFT</strong> para jugar, canjear, coleccionar o
        intercambiar en nuestro <strong>marketplace integrado</strong>.
        <br />
        Conectá tu wallet y comenzá a jugar. <em>La suerte está tokenizada.</em>
      </p>
    </section>
  );
};
