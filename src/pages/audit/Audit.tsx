import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Typography from "@mui/material/Typography";

export function Audit() {
  return (
    <>
      <AuthenticatedTemplate>
        <div className="audit">
          <Typography variant="h6" align="center">
            Audit Page
          </Typography>
        </div>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <Typography variant="h6" align="center">
          Please sign-in to see your profile information.
        </Typography>
      </UnauthenticatedTemplate>
    </>
  );
}
