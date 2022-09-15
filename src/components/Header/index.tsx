import { ShoppingCart } from "phosphor-react";
import { LOGO } from "../../assets/images";
import { defaultTheme } from "../../styles/themes/default";
import { Button } from "../Button";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LOGO} />
      <Button backgroundColor={defaultTheme["yellow-light"]}>
        <ShoppingCart
          size={18}
          weight="fill"
          color={defaultTheme["yellow-dark"]}
        />
      </Button>
    </HeaderContainer>
  );
}
