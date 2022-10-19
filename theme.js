/**
 * @author: melendez-dev
 * [DATE]: 09 oct 2022
 * [DESCRIPTION]: This file contains the components that are used in the theme
 **/

import { createTheme } from "@mui/material/styles";

const colors = {
  primary: "#D8705D",
  secondary: "#434343",
  thirth: "#F3F3F3",
  fourth: "#FFFFFF",
};

export const theme = createTheme({
  /**
   * [COMPONENTS]: Here you can add the components that you want to modify
   **/
  components: {
    // [TEXTFIELD]: Here you can modify the textfield component
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            "& .MuiOutlinedInput-root": {
              height: "40px",
              borderRadius: "50px",
              width: "100%",
            },
          },
        },
      ],
    },
    // [BUTTON]: Here you can add the components that you want to modify
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            height: "29px",
            padding: "4px 16px 4px 16px",
            borderRadius: "20px",
            fontSize: "14px",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            padding: "4px 16px",
            gap: "10px",
            height: "29px",
            border: "2px solid ",
            borderRadius: "20px",
            fontSize: "14px",
            textColor: "#fff",
          },
        },
        {
          props: { variant: "text" },
          style: {
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21x",
          },
        },
        {
          props: { variant: "text-line" },
          style: {
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21x",
            textDecoration: "underline",
            textDecorationColor: colors.primary,
            textDecorationThickness: "2px",
            textUnderlineOffset: "5px",
          },
        },
      ],
    },
    // [TYPGRAPHY]: Here you can add the components that you want to modify
    MuiTypography: {
      variants: [
        {
          props: { variant: "logo" },
          style: {
            fontWeight: 900,
            fontSize: "27px",
            lineHeight: "27px",
            letterSpacing: "1px",
          },
        },
        {
          props: { variant: "logo-small" },
          style: {
            fontWeight: 900,
            fontSize: "20px",
            lineHeight: "27px",
            letterSpacing: "1px",
          },
        },
        {
          props: { variant: "h1-bold" },
          style: {
            fontWeight: 600,
            fontSize: "47.3px",
            lineHeight: "64px",
          },
        },
        {
          props: { variant: "h1" },
          style: {
            fontWeight: 400,
            fontSize: "47.3px",
            lineHeight: "64px",
          },
        },
        {
          props: { variant: "h2-bold" },
          style: {
            fontWeight: 600,
            fontSize: "31.5px",
            lineHeight: "47.3px",
          },
        },
        {
          props: { variant: "h2" },
          style: {
            fontWeight: 400,
            fontSize: "31.5px",
            lineHeight: "47.3px",
          },
        },
        {
          props: { variant: "h3-bold" },
          style: {
            fontWeight: 600,
            fontSize: "21px",
            lineHeight: "31.5px",
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontWeight: 400,
            fontSize: "21px",
            lineHeight: "31.5px",
          },
        },
        {
          props: { variant: "h4-bold" },
          style: {
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          },
        },
        {
          props: { variant: "h4" },
          style: {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "21px",
          },
        },
        {
          props: { variant: "p-bold" },
          style: {
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px",
          },
        },
        {
          props: { variant: "p" },
          style: {
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
          },
        },
        {
          props: { variant: "p-small" },
          style: {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "21px",
          },
        },
      ],
    },
  },

  // [COLORS]: Here you can add the typography that you want to modify
  palette: {
    primary: {
      main: colors.primary,
      contrastText: "#fff",
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.thirth,
    },
    success: {
      main: colors.fourth,
    },
  },
});
