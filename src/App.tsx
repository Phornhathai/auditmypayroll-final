import { Routes, Route, useNavigate } from "react-router-dom";
// Material-UI imports
import Grid from "@mui/material/Grid";

// MSAL imports
import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import { CustomNavigationClient } from "./utils/NavigationClient";
import { Home } from "./pages/home/Home";
import { PageLayout } from "./components/pageLayout/PageLayout";
import { Audit } from "./pages/audit/Audit";
import { Payslips } from "./pages/payslips/Payslips";
import { Reports } from "./pages/reports/Reports";
import { Companies } from "./pages/companies/Companies";
import { ProfileData } from "./graph";
import Nopage from "./pages/nopage/Nopage";

// Sample app imports

type AppProps = {
  pca: IPublicClientApplication;
};

function App({ pca }: AppProps) {
  // The next 3 lines are optional. This is how you configure MSAL to take advantage of the router's navigate functions when MSAL redirects between pages in your app
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  return (
    <MsalProvider instance={pca}>
      <PageLayout>
        <Grid container justifyContent="center">
          <Pages />
        </Grid>
      </PageLayout>
    </MsalProvider>
  );
}

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/audit" element={<Audit />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/payslips" element={<Payslips />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/*" element={<Nopage />} />
    </Routes>
  );
}

export default App;
