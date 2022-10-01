import {
  AMERICANO,
  ARABE,
  CAFE_COM_LEITE,
  CAFE_GELADO,
  CAPUCCINO,
  CHOCOLATE_QUENTE,
  CUBANO,
  EXPRESSO,
  EXPRESSO_CREMOSO,
  HAVAIANO,
  INTRODUCTION_IMAGE,
  IRLANDES,
  LATTE,
  MACCHIATO,
  MOCHACCINO,
} from '../../assets/images';
import { Skills } from './components';
import { CatalogCard } from './components/catalogCard';
import {
  IntroductionContainer,
  IntroductionImage,
  IntroductionInformation,
  ProductsContainer,
  ProductsListContainer,
} from './styles';

const coffess = [
  {
    id: 0,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['TRADICIONAL'],
    price: 9.99,
    image: EXPRESSO,
  },
  {
    id: 1,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['TRADICIONAL'],
    price: 10.99,
    image: AMERICANO,
  },

  {
    id: 2,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['TRADICIONAL'],
    price: 11.99,
    image: EXPRESSO_CREMOSO,
  },

  {
    id: 3,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['TRADICIONAL', 'GELADO'],
    price: 12.99,
    image: CAFE_GELADO,
  },

  {
    id: 4,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 13.99,
    image: CAFE_COM_LEITE,
  },

  {
    id: 5,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 14.99,
    image: LATTE,
  },

  {
    id: 6,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 15.99,
    image: CAPUCCINO,
  },

  {
    id: 7,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 16.99,
    image: MACCHIATO,
  },
  {
    id: 8,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 17.99,
    image: MOCHACCINO,
  },
  {
    id: 9,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['ESPECIAL', 'COM LEITE'],
    price: 18.99,
    image: CHOCOLATE_QUENTE,
  },

  {
    id: 10,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    price: 18.99,
    image: CUBANO,
  },
  {
    id: 11,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['ESPECIAL'],
    price: 19.99,
    image: HAVAIANO,
  },

  {
    id: 12,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['ESPECIAL'],
    price: 21.99,
    image: ARABE,
  },

  {
    id: 13,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    price: 21.99,
    image: IRLANDES,
  },
];

export function Home() {
  return (
    <>
      <IntroductionContainer>
        <IntroductionInformation>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <Skills />
        </IntroductionInformation>
        <IntroductionImage src={INTRODUCTION_IMAGE} />
      </IntroductionContainer>
      <ProductsContainer>
        <h3>Nossos Cafés</h3>
        <ProductsListContainer>
          {coffess.map(coffee => (
            <CatalogCard
              name={coffee.name}
              description={coffee.description}
              tags={coffee.tags}
              price={coffee.price}
              image={coffee.image}
            />
          ))}
        </ProductsListContainer>
      </ProductsContainer>
    </>
  );
}
