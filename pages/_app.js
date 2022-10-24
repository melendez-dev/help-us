// provider theme to the app
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";

// redux
import { Provider } from "react-redux";
import { store } from "../src/app/store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
