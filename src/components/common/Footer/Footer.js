import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
// icons social media
import {
  IconFaebook,
  IconInstagram,
  IconLinkedin,
} from "../../../assest/icons/config";
import Link from "next/link";
// redux
import { useSelector } from "react-redux";
export default function Footer() {
  const router = useRouter();
  const movil = useSelector((state) => state.movil.value);
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
            display: "flex",
          }}
        >
          <Grid item xs={12} md={4}>
            <Box
              style={{
                display: "flex",
                flexDirection: movil ? "row" : "column",
                alignItems: movil ? "center" : undefined,
                justifyContent: movil ? "center" : undefined,
              }}
              mt={movil ? 2 : 0}
              mb={movil ? 2 : 0}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                mr={movil ? 3 : 0}
              >
                <Link href="/">
                  <Typography
                    variant={movil ? "logo-small" : "logo"}
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
            xs={6}
            md={4}
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
                borderRight: movil ? "1px solid #fff" : undefined,
                width: movil ? "80%" : undefined,
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
          <Grid
            item
            xs={12}
            md={4}
            style={{
              order: movil ? -1 : undefined,
            }}
          >
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
          {!movil && (
            <Grid item xs={12}>
              <Box mt={2} mb={2}>
                <hr />
              </Box>
            </Grid>
          )}

          <Grid
            item
            xs={6}
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
            {movil && (
              <>
                <Box>
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
                </Box>
                <Box>
                  <Typography variant="p-small" color="error">
                    Desarrollado Vélez Desing
                  </Typography>
                </Box>
              </>
            )}
          </Grid>
          {movil && (
            <Grid item xs={12}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                mt={2}
              >
                <Typography variant="p-small" color="error">
                  © 2021 Ayudemos
                </Typography>
              </Box>
            </Grid>
          )}

          {!movil && (
            <>
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
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
