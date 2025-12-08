import { Suspense } from "react";
import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";
import Filter from "@/app/_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const metadata = {
  title: "Cabins",
  description:
    "Explore our luxurious cabins in the heart of the Italian Dolomites.",
};

// desabilita o cache para garantir que os dados estejam sempre atualizados
// export const revalidate = 0;

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity || "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      {/*
          Utilizziamo Suspense per mostrare uno spinner di caricamento mentre CabinList
          ho messo la key sul Suspense in modo che si resetti ogni volta che cambia il filtro, e quindi mostri di nuovo lo spinner
        */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

// Come possiamo condividere lo stato tra il client e il server ? il metodo piu facile é memorizzare lo stato direttamente nell'url
// Possiamo usare i parametri della query string per memorizzare lo stato nell'url
// In questo modo, quando il server rende la pagina, puó leggere lo stato dall'url e renderizzare la pagina di conseguenza
// Allo stesso modo, quando il client naviga, puó aggiornare l'url con il nuovo stato e il server puó leggere lo stato aggiornato dall'url
// e va applicato soltanto sulla page , e non sul component
// e passiamo il valore del filtro come parametro (searchParams) alla page che a sua volta lo passa al component che effettua la fetch dei dati
// In questo modo, il server puó leggere il valore del filtro dall'url e restituire i dati filtrati di conseguenza
