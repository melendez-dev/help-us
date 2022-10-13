import { Container, Grid, Typography, Button } from "@mui/material";
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
          <Typography variant="logo" color="primary">
            AYUDEMOS
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="text" color="secondary">
            ¿Qué hacemos?
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="text" color="secondary">
            ¿Quiénes somos?
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="text" color="secondary">
            Solicitud RTE
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="text" color="secondary">
            Contacto
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" color="primary">
            Donar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
