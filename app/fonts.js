import { Josefin_Sans } from "next/font/google";

export const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// Para que serve o display: "swap" ?
// O display: "swap" é uma propriedade usada na configuração de fontes web para melhorar a experiência do usuário durante o carregamento das fontes. Quando essa propriedade é definida, o navegador exibe imediatamente o texto usando uma fonte de fallback (geralmente uma fonte padrão do sistema) enquanto a fonte personalizada está sendo baixada. Assim que a fonte personalizada é carregada, o navegador "troca" a fonte de fallback pela fonte personalizada, garantindo que o conteúdo seja legível desde o início, sem atrasos perceptíveis.

// Inves o subset: ["latin"] ?
// O subset: ["latin"] é uma configuração usada ao importar fontes web para especificar quais conjuntos de caracteres (subconjuntos) da fonte devem ser carregados. No caso do subset "latin", isso indica que apenas os caracteres latinos (usados em idiomas como inglês, espanhol, francês, etc.) serão incluídos na fonte carregada. Isso pode ajudar a reduzir o tamanho do arquivo da fonte e melhorar o desempenho do carregamento da página, especialmente se a aplicação não precisar de suporte para outros conjuntos de caracteres, como cirílico ou chinês.

// Por que usamos o next/font/google ao inves de importar direto do google fonts ?
// O next/font/google é uma funcionalidade específica do Next.js que facilita a integração de fontes do Google Fonts em aplicações Next.js. Ele oferece várias vantagens em comparação com a importação direta das fontes do Google Fonts, como otimização automática, carregamento eficiente e suporte ao servidor. Ao usar next/font/google, as fontes são pré-carregadas e otimizadas para melhorar o desempenho da aplicação, resultando em tempos de carregamento mais rápidos e melhor experiência do usuário. Além disso, ele permite o uso de recursos avançados, como o controle sobre os subsets e estilos das fontes, proporcionando maior flexibilidade na personalização da tipografia da aplicação.
