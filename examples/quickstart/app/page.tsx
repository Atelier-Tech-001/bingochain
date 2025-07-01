import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col gap-8 items-center sm:items-start w-full px-3 md:px-0">
        <Hero />

        <Separator className="w-full my-14 opacity-15" />

        <section className="flex flex-col items-center md:flex-row gap-10 w-full justify-center max-w-5xl">
          <div className="flex flex-col gap-10">
            {/* Bingo Instantáneo Card 
            <a
              href="#"
              target="_blank"
              className="relative bg-indigo-500 bg-opacity-40 rounded-tr-sm rounded-bl-sm rounded-tl-xl rounded-br-xl max-w-md text-white border-none transition-all shadow-[0_0_25px_rgba(34,255,255,0.5)] hover:shadow-[0_0_35px_rgba(34,255,255,0.9)]"
            >
              <div className="bg-indigo-500 bg-opacity-20 h-[107%] w-[104%] rounded-xl -z-20 absolute right-0 bottom-0"></div>
              <div className="bg-indigo-500 bg-opacity-20 h-[107%] w-[104%] rounded-xl -z-20 absolute top-0 left-0"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  Bingo Instantáneo
                  <ArrowRight className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-indigo-100">
                  Jugar nunca fue tan rápido: participá en partidas instantáneas
                  y descubrí al momento si tu cartón NFT es ganador.
                </p>
                <button className="mt-2 px-6 py-2 bg-white text-cyan-700 font-bold rounded-xl hover:bg-cyan-100 shadow-[0_0_20px_rgba(34,255,255,0.7)] transition">
                  Jugar ahora
                </button>
              </CardContent>
            </a>*/}

            {/* Jackpot & Raspadita Card 
            <a
              href="#"
              target="_blank"
              className="bg-teal-300 bg-opacity-60 rounded-tr-sm rounded-bl-sm rounded-tl-xl rounded-br-xl relative max-w-md h-full text-white border-none transition-colors shadow-[0_0_25px_rgba(34,255,255,0.5)] hover:shadow-[0_0_35px_rgba(34,255,255,0.9)]"
            >
              <div className="bg-teal-300 bg-opacity-20 h-[107%] w-[104%] rounded-xl -z-20 absolute right-0 bottom-0"></div>
              <div className="bg-teal-300 bg-opacity-20 h-[107%] w-[104%] rounded-xl -z-20 absolute top-0 left-0"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  Jackpot & Raspadita
                  <ArrowRight className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-emerald-100">
                  Probá tu suerte con un raspa y gana instantáneo o unite al
                  Jackpot acumulado.
                  <br />
                  Fusioná tus premios y generá un cupón NFT único y comerciable.
                </p>
                <button className="mt-2 px-6 py-2 bg-white text-cyan-700 font-bold rounded-xl hover:bg-cyan-100 shadow-[0_0_20px_rgba(34,255,255,0.7)] transition">
                  Probar suerte
                </button>
              </CardContent>
            </a>*/}
          </div>

          <Card className="relative bg-black rounded-tr-sm rounded-bl-sm text-white border-none h-full w-full max-w-xl self-start h-[520px] shadow-[0_0_25px_rgba(22,204,255,0.6)] hover:shadow-[0_0_35px_rgba(22,204,255,0.9)] transition duration-300">
            <div className="bg-black bg-opacity-90 h-[104%] w-[103%] md:h-[103%] md:w-[102%] rounded-xl -z-20 absolute right-0 bottom-0"></div>
            <div className="bg-black bg-opacity-90 h-[104%] w-[103%] md:h-[103%] md:w-[102%] rounded-xl -z-20 absolute top-0 left-0"></div>
            <CardHeader>
              <CardTitle className="text-2xl">BingoChain Semanal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white text-opacity-90 text-lg">
                Comprá tu cartón NFT cada domingo y participá del sorteo
                semanal.
              </p>
              <ul className="list-disc list-inside text-white text-opacity-80 space-y-1">
                <li>Seleccioná 6 números únicos</li>
                <li>Un número se sortea por día</li>
                <li>
                  Los primeros en acertar pueden listar su NFT en el marketplace
                </li>
                <li>A más aciertos, más valor gana tu cupón</li>
              </ul>
              <button className="mt-4 px-6 py-2 bg-white text-cyan-700 font-bold rounded-xl hover:bg-cyan-100 shadow-[0_0_20px_rgba(22,204,255,0.7)] transition">
                Participar ahora
              </button>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
