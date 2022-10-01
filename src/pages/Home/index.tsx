import { INTRODUCTION_IMAGE } from '../../assets/images';
import { Skills } from './components';
import { CatalogCard } from './components/catalogCard';
import {
  IntroductionContainer,
  IntroductionImage,
  IntroductionInformation,
} from './styles';

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
      <CatalogCard />
    </>
  );
}
