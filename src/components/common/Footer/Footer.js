import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
// icons social media
import {
  IconFaebook,
  IconInstagram,
  IconLinkedin,
} from "../../../assest/icons/config";
import Link from "next/link";
export default function Footer() {
  const router = useRouter();
  return (
    <Box
      style={{
        backgroundColor: "#434343",
        padding: "20px 0",
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
                mt={1}
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
              <Box>
                <Link href="/what-do">
                  <Typography variant="p-small" color="error">
                    ¿Qué hacemos?
                  </Typography>
                </Link>
              </Box>
              <Box mt="2px">
                <Link href="/about-us">
                  <Typography variant="p-small" color="error">
                    ¿Quiénes somos?
                  </Typography>
                </Link>
              </Box>
              <Box mt="4px">
                <Link href="/request">
                  <Typography variant="p-small" color="error">
                    Solicitud RTE
                  </Typography>
                </Link>
              </Box>
              <Box mt="2px">
                <Link href="/contact-us">
                  <Typography variant="p-small" color="error">
                    Contácto
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                onClick={() => router.push("/donate")}
              >
                <span
                  style={{
                    color: "#fff",
                    fontSize: "12px",
                  }}
                >
                  Cambiar una vida
                </span>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={2} mb={2}>
              <hr />
            </Box>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              textAlign: "center",
            }}
          >
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
          <Grid
            item
            xs={3}
            style={{
              textAlign: "center",
            }}
          >
            <Link href="/politices">
              <Typography
                variant="p-small"
                color="error"
                style={{
                  cursor: "pointer",
                }}
              >
                Términos de uso
              </Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              textAlign: "center",
            }}
          >
            <Typography variant="p-small" color="error">
              Desarrollado Vélez Desing
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              textAlign: "center",
            }}
          >
            <Typography variant="p-small" color="error">
              © 2021 Ayudemos
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
