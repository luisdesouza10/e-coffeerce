import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { RoundedIcon } from "./components";

export function Home() {
  return (
    <>
      <RoundedIcon
        backgroundColor={defaultTheme["yellow-dark"]}
        icon={
          <ShoppingCart size={16} color={defaultTheme.white} weight="fill" />
        }
      />

      <RoundedIcon
        backgroundColor={defaultTheme.yellow}
        icon={<Timer size={16} color={defaultTheme.white} weight="fill" />}
      />

      <RoundedIcon
        backgroundColor={defaultTheme["base-text"]}
        icon={<Package size={16} weight="fill" color={defaultTheme.white} />}
      />

      <RoundedIcon
        backgroundColor={defaultTheme.purple}
        icon={<Coffee size={16} weight="fill" color={defaultTheme.white} />}
      />
    </>
  );
}
