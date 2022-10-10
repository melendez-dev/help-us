/**
 * @author: melendez-dev
 * [DATE]: 09 oct 2022
 * [DESCRIPTION]: This file contains the components that are used in the theme
 **/

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  /**
   * [COMPONENTS]: Here you can add the components that you want to modify
   **/
  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            "& .MuiOutlinedInput-root": {
              height: "40px",
              borderRadius: "50px",
            },
          },
        },
      ],
    },
  },
  /**
   * [COLORS]: Here you can add the colors that you want to use in the theme
   **/
  palette: {
    // add new colors, example:
    newColor: {
      main: "#000000",
    },
  },
});
