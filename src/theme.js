import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "poppins",
    heading1: {
      fontSize: '22px',
      fontWeight: 'medium'
    },
    heading2: {
      fontSize: '18px',
      fontWeight: '600'
    },
    heading3: {
      fontSize: '16px',
      fontWeight: 'regular'
    },
    fontSize: 14,
    small_font: '13px',
    extra_small: '12px'
  },
  palette: {
    primary: {
      green_dark: "#5D953C",
      green_border: "#528A31",
      top_nav_bar_background: "#5D953C",
      search_bar_background: "#528A31",
      white: "#FFFFFF",
      green_light: "#5B9049",
      background_hover: "rgba(91, 144, 73, 0.13)",
      main: "#2D2D2D",
      pageHeadingColor: "#000000",
      checkBoxColor: "#EBEBF3",
      labelColor: "#6A6A6A",
      dropDownBorder: "1px solid #D6D6D6 !important",
      dropDownBoxShadow: "0px 4px 15px rgba(141, 147, 155, 0.2)",
      tableAndTab: "#919195",
      lightbtnBackgroundColor: "#E3E3E3",
      lightbtnTextColor: "#757575",
      tabPanelBackground: "#F7F7F7",
      notificationIconColor: "#F96B1C",
      notificationIconBackgroundColor: "#FBEDE5",
      toggleTabColor: "#7E7E80",
      lightGreyColor: "#969696",
      dangerDark: "#EC4C4C",
      dangerLight: "#F9E9E9",
      inputFieldLabelColor: '#3B3B43',

      main_dark: "#0A3450",
      yellow_dark: "#5D953C",
      yellow_light: "#EDEEDA",
      gray_dark: "#E9E9E9",
      gray_light: "#F4F4F4",
      icon_inactive: "#637B8B",
      btn_hover_bg: "#F5F7F8",
      search_border_color: "#E2ECF2",
      typography_gray: "#85949B",
      page_background: "#f9fcff",
      red_with_opacity: "rgba(210, 93, 93, 0.1)",

      yellow_with_opacity: "rgba(165, 169, 68, 0.2)",
      label_light_color: "#738089",
      border_color: "#DDE5EA",
      gray_text: "#586772",
      badge_latest_color: "rgb(42, 135, 92, 1)",
      badge_latest_background: "rgb(42, 135, 92, 0.1)",
      badge_outdated_color: "rgb(88, 103, 114)",
      badge_outdated_background: "#F0F4F8",
      badge_active_color: "#A5A944",
      badge_active_background: "rgb(165, 169, 68, 0.1)",
      badge_inactive_color: "#D25D5D",
      badge_inactive_background: "rgb(210, 93, 93, 0.1)",
      light_WhiteBlue: "#FDFEFF",
      ligth_GrayWhite: "#DCE3EB",
      table: {
        table_header: "#F0F4F8",
        table_row: "#F8FAFC",
      },
      btn: {
        secondary: "#EFF2F4",
      },
    },
  },
  shapes: {
    borderRadius: "15px",
    primaryBtnBorderRadius: "8px",
    dropDownBorderRadious: "12px",
    inputFieldLabel: '12px',

    primaryBtnFontSize: "13px",
    small_heading: "14px",
    page_heading: "19px"
  },
  fonts: {
    primary: "'Poppins', sans-serif;",
  },
  table: {
    borderRadius: "12px"
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
