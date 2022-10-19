import { Container, Grid, Typography, Button, Box } from "@mui/material";
// icons social media
import {
  IconFaebook,
  IconInstagram,
  IconLinkedin,
} from "../../../assest/icons/config";
import Link from "next/link";
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
                <Link href="/">
                  <Typography
                    variant="logo"
                    color="primary"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    AYUDEMOS
                  </Typography>
                </Link>
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
                cursor: "pointer",
              }}
            >
              <Link href="/what-do">
                <Typography variant="p-small" color="error">
                  ¿Qué hacemos?
                </Typography>
              </Link>
              <Link href="/about-us">
                <Typography variant="p-small" color="error">
                  ¿Quiénes somos?
                </Typography>
              </Link>
              <Link href="/request">
                <Typography variant="p-small" color="error">
                  Solicitud RTE
                </Typography>
              </Link>
              <Link href="/contact-us">
                <Typography variant="p-small" color="error">
                  Contácto
                </Typography>
              </Link>
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
            <Link href="/politices">
              <Typography
                variant="p-small"
                color="error"
                style={{
                  cursor: "pointer",
                }}
              >
                Política de privacidad
              </Typography>
            </Link>
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
