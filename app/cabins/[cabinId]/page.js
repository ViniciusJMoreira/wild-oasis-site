import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

// A funcao generateMetadata gera os metadados dinamicos para cada pagina de cabana
export async function generateMetadata({ params }) {
  // recuperando os dados da cabana usando a funcao getCabin
  const { name } = await getCabin(params.cabinId);
  return {
    title: `Cabin ${name}`,
    description: `Discover Cabin ${name} - your perfect getaway in the Dolomites. Enjoy stunning views, cozy interiors, and unforgettable experiences.`,
  };
}

// A funcao generateStaticParams gera as rotas estaticas para todas as cabanas
export async function generateStaticParams() {
  const cabins = await getCabins();
  // recuperando a lista de cabanas usando a funcao getCabins
  const ids = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));
  // e retornando um array de objetos com os ids das cabanas
  return ids;
}

// A funcao Page recebe os parametros da rota como props
export default async function Page({ params }) {
  // e busca os dados da cabana correspondente usando a funcao getCabin
  const cabin = await getCabin(params.cabinId);
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center text-accent-400 mb-10">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
      </div>

      <Suspense fallback={<Spinner />}>
        <Reservation cabin={cabin} />
      </Suspense>
    </div>
  );
}
