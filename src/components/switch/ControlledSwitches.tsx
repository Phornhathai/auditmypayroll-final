import * as React from "react";
import Switch from "@mui/material/Switch";

type props = {
  status: string;
};

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      color="primary"
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
