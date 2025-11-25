import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        placeholder="blur"
      />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;

// Image é um componente do Next.js que otimiza automaticamente as imagens para melhorar o desempenho do site, oferecendo recursos como carregamento lento (lazy loading), redimensionamento automático e suporte a formatos modernos de imagem.

// O redimensionamento automático de imagens no Next.js é gerenciado pelo componente Image, que ajusta dinamicamente o tamanho das imagens com base nas dimensões especificadas e nas características do dispositivo do usuário. Isso garante que as imagens sejam carregadas na resolução ideal, melhorando o desempenho e a experiência do usuário.
