import Typography from "@mui/material/Typography";
import NavBar from "../navbar/NavBar";
import Menu from "../menu/Menu";
import "./pageLayout.scss";

type Props = {
  children?: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <div className="pageLayout">
      <div className="menu-leftSide w-[210px]">
        <Menu />
      </div>
      <div className="content">
        <NavBar />
        <Typography variant="h5" align="center">
          Microsoft Authentication Library For React Quickstart
        </Typography>
        <br />
        <br />
        {children}
      </div>
    </div>
  );
};
