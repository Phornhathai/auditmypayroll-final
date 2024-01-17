import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { Link as RouterLink } from "react-router-dom";
import WelcomeName from "../welcomeName/WelcomeName";
import SignInSignOutButton from "../signInSignOutButton/SignInSignOutButton";

const NavBar = () => {
  return (
    <div className="navbar">
      <Toolbar>
        <WelcomeName />
        <SignInSignOutButton />
      </Toolbar>
    </div>
  );
};

export default NavBar;
