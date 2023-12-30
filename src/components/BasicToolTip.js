import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import theme from "../theme";

const StyledTooltip = styled(({ className, theme, ...props }) => (
  <Tooltip
    id="tooltip"
    {...props}
    mt={props.margin ? props.margin : 10}
    classes={{ popper: className }}
  />
))`
  & .MuiTooltip-tooltip {
    background: #2D2D2D;
    margin: 0;
    width: 10%
    color:  ${theme.palette.primary.white};
    border-radius: 35px;
    padding: 3px 15px;
  }
`;

const DSAToolTip = (props) => {
  return <StyledTooltip {...props}>{props.children}</StyledTooltip>;
};

export default DSAToolTip;
