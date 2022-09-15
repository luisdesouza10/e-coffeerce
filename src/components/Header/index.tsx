import { MapPin, ShoppingCart } from "phosphor-react";
import { LOGO } from "../../assets/images";
import { defaultTheme } from "../../styles/themes/default";
import { Button } from "../Button";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LOGO} />
      <div>
        <Button backgroundColor={defaultTheme["purple-light"]}>
          <MapPin size={18} weight="fill" color={defaultTheme["purple"]} />
          <h1>Brusque, SC</h1>
        </Button>

        <Button backgroundColor={defaultTheme["yellow-light"]}>
          <ShoppingCart
            size={18}
            weight="fill"
            color={defaultTheme["yellow-dark"]}
          />
        </Button>
      </div>
    </HeaderContainer>
  );
}
