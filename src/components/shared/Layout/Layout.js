import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import { Container } from "@mui/material";
export default function Layout({ children, isContainer }) {
  return (
    <div>
      <Navbar />
      {isContainer ? <Container>{children}</Container> : children}
      <Footer />
    </div>
  );
}
