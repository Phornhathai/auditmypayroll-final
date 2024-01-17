import { ChangeEvent, useState } from "react";
import { PDFtobase64, base64toPDF } from "../../services/commonfunctions";
import "./home.scss";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@mui/material";
import WelcomeName from "../../components/welcomeName/WelcomeName";

const Home = () => {
  const [iframeSrcs, setIframeSrcs] = useState<string[]>([]);

  const handlePDFtobase64 = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (file) {
        const base64String = await PDFtobase64(file);
        console.log(base64String);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleBase64toPDF = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    const base64Strings = inputText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    base64toPDF(base64Strings).then((srcs: string[]) => {
      setIframeSrcs(srcs);
    });
  };

  return (
    <>
      <AuthenticatedTemplate>
        <ButtonGroup orientation="vertical">
          <Button
            component={RouterLink}
            to="/audit"
            variant="contained"
            color="primary"
          >
            test to audit page
          </Button>
        </ButtonGroup>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <Typography variant="h6" align="center">
          Please sign-in to see your profile information.
        </Typography>
      </UnauthenticatedTemplate>
    </>
  );
};

export default Home;
