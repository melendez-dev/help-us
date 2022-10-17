import { Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";
export default function Navbar() {
  return (
    <Container>
      <Grid
        container
        style={{
          display: "flex",
          alignItems: "center",
          padding: "24px 0px",
        }}
      >
        <Grid item xs={3}>
          <Link href="/">
            <Typography
              variant="logo"
              color="primary"
              style={{ cursor: "pointer" }}
            >
              AYUDEMOS
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link href="/what-do">
            <Button variant="text" color="secondary">
              ¿Qué hacemos?
            </Button>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link href="/about-us">
            <Button variant="text" color="secondary">
              ¿Quiénes somos?
            </Button>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link href="/request">
            <Button variant="text" color="secondary">
              Solicitud RTE
            </Button>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link href="/contact-us">
            <Button variant="text" color="secondary">
              Contacto
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link href="/donate">
            <Button variant="outlined" color="primary">
              Donar
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
