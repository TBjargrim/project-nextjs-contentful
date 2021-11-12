import Link from "next/link";
import { MobileIcon, BurgerMenyIcon, NewsBanner } from "./Styles/StyleNavbar";
const Navbar = ({ toggle }) => {
  return (
    <>
      <NewsBanner
        whileHover={{
          scale: 1.04,
          boxShadow: "0px 0px 6px rgb(255,255,255)",
        }}
      >
        <Link href="/news">
          <p>Nyheter | Erbjudanden</p>
        </Link>
      </NewsBanner>
      <MobileIcon>
        <BurgerMenyIcon onClick={toggle} />
      </MobileIcon>
    </>
  );
};

export default Navbar;
