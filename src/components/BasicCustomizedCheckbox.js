import * as React from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import BasicToolTip from "./BasicToolTip";
import { useSelector } from "react-redux";
const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 20,
  height: 20,
  backgroundColor: theme.palette.primary.checkBoxColor,
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "#d5d2d2",
  },
}));

function BpCheckbox(props) {
  const currentUser = useSelector((state) => state.locationplayer.currentUser);
  let themeObj = currentUser?.length !== 0 ? currentUser?.theme : "";
  let appIconColor = "#" + themeObj?.app_icon_color;

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: appIconColor !== "" ? `${appIconColor}!important` : "",
    backgroundImage:
      appIconColor !== ""
        ? `${appIconColor}!important`
        : "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 20,
      height: 20,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
  });
  return (
    <BasicToolTip
      title={props.toolTipTittle}
      placement={props.toolTipPlacement}
    >
      <Checkbox
        sx={{
          "&:hover": { bgcolor: "transparent" },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        inputProps={{ "aria-label": "Checkbox demo" }}
        onChange={props.handleChange}
        checked={props.checked}
        {...props}
      />
    </BasicToolTip>
  );
}

export default function BasicCustomizedCheckbox(props) {
  return <BpCheckbox {...props} />;
}
