import "@/app/_styles/globals.css";
import { josefinSans } from "./fonts";

import Header from "@/app/_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    default: "The Wild Oasis",
    template: "%s | The Wild Oasis",
  },
  description:
    "Luxurius cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${josefinSans.className} relative min-h-screen bg-primary-950 text-primary-100 antialiased flex flex-col`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="w-full max-w-7xl mx-auto">
            {/* O provider é um componente cliente, e children são as páginas da aplicação. Porem il children ja foi definido como um componente servidor por padrão no Next.js, então precisamos envolver o children com o provider para que ele possa acessar o contexto de reserva. è a unica forma de passar um elemento servidor para um componente cliente. */}
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

// O QUE E BOILERPLATE ?
// Boilerplate é um termo usado na programação para se referir a trechos de código que são repetitivos e padronizados,
// servindo como uma base ou estrutura inicial para o desenvolvimento de aplicações.
// Esses trechos geralmente incluem configurações, estruturas de arquivos e códigos comuns que facilitam o início de um projeto,
// permitindo que os desenvolvedores se concentrem na lógica específica do aplicativo em vez de reescrever código básico a cada vez.

// Toda pasta dentro app elas sao consideradas rotas automaticamente no Next.js. Para nao considerar uma pasta como rota, basta colocar um underline _ antes do nome da pasta.

// Metadata é um objeto especial exportado em um arquivo de layout ou página no Next.js que permite definir informações adicionais sobre a página, como título, descrição, palavras-chave, autor, entre outros. Essas informações são usadas para melhorar a otimização para mecanismos de busca (SEO) e a experiência do usuário, fornecendo dados relevantes sobre o conteúdo da página.

// O RootLayout é um componente especial no Next.js que serve como o layout raiz para todas as páginas da aplicação. Ele define a estrutura básica da página, incluindo elementos comuns como cabeçalho, rodapé e estilos globais, garantindo consistência em toda a aplicação.

// Para importar o tailwind na aplicação Next.js, criamos um arquivo globals.css dentro da pasta app/_styles e importamos ele no layout.js.
