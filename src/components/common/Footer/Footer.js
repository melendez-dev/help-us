import { Container, Grid, Typography, Button, Box } from "@mui/material";
// icons social media
import {
  IconFaebook,
  IconInstagram,
  IconLinkedin,
} from "../../../assest/icons/config";
export default function Footer() {
  return (
    <Box
      style={{
        backgroundColor: "#434343",
      }}
    >
      <Container>
        <Grid
          container
          style={{
            padding: "24px 0px",
          }}
        >
          <Grid item xs={4}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography variant="logo" color="primary">
                  AYUDEMOS
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IconInstagram />
                <IconFaebook />
                <IconLinkedin />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              display={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="p-small" color="error">
                ¿Qué hacemos?
              </Typography>
              <Typography variant="p-small" color="error">
                ¿Quiénes somos?
              </Typography>
              <Typography variant="p-small" color="error">
                Solicitud RTE
              </Typography>
              <Typography variant="p-small" color="error">
                Contácto
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button variant="outlined" color="primary">
                Cambiar una vida
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={2} mb={2}>
              <hr />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="p-small" color="error">
              Política de privacidad
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="p-small" color="error">
              Términos de uso
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="p-small" color="error">
              Desarrollado Vélez Desing
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="p-small" color="error">
              © 2021 Ayudemos
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
