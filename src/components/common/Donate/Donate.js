import {
  TextField,
  Box,
  Typography,
  Button,
  Container,
  Card,
  Grid,
} from "@mui/material";

// IMAGE
import Image from "next/image";

// redux
import { useSelector } from "react-redux";
export default function Donate() {
  const movil = useSelector((state) => state.movil.value);
  const CustomCotainer = movil ? Container : Box;
  return (
    <Grid container>
      <Grid item xs={12} md={7}>
        <Box
          style={{
            background: "#F3F3F3",
            height: "100%",
            position: "relative",
          }}
        >
          <Box
            style={{
              position: "absolute",
              right: movil ? undefined : "-7%",
              left: movil ? "50%" : undefined,
              transform: movil ? "translate(-50%, 0%)" : undefined,
              top: "18%",
              zIndex: 10,
            }}
          >
            <Card
              style={{
                background: "#D8705D",
                width: movil ? "342px" : "574px",
                height: movil ? "317px" : "462px",
                borderRadius: "12px",
                marginTop: movil ? "10%" : undefined,
              }}
            >
              <Box
                style={{
                  padding: movil ? "10px" : "62px",
                }}
              >
                <Grid container>
                  <Grid xs={12}>
                    <Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant={movil ? "h3-bold" : "h2"}
                          color="white"
                        >
                          Transferencia Bancaria
                        </Typography>
                      </Box>
                      <Box mt={2} style={{ textAlign: "center" }}>
                        <CustomCotainer>
                          <Typography variant="p" color="white">
                            ¡Estás a punto de apoyar la construcción de{" "}
                            <b>un nuevo hogar</b> para quienes más lo necesitan!
                          </Typography>
                        </CustomCotainer>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid xs={12}>
                    <Container
                      style={{
                        padding: movil ? "0 50px" : "0px 50px",
                      }}
                    >
                      <Box mt={movil ? 2 : 6}>
                        <Typography variant="h3" color="white">
                          Banco Davivienda
                        </Typography>

                        <Typography
                          variant={movil ? "p-small" : "p-bold"}
                          color="white"
                        >
                          #### #### #### ####
                        </Typography>
                      </Box>
                    </Container>
                  </Grid>
                  <Grid item xs={12}>
                    <Container
                      style={{
                        padding: "0px 50px",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                        mt={1}
                        mb={1}
                      >
                        <Box
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            objectPosition: "center",
                            width: "221px",
                            height: "1px",
                            background: "#fff",
                            marginTop: "10px",
                            textAlign: "center",
                            marginRight: "9%",
                          }}
                        />
                      </Box>
                    </Container>
                  </Grid>
                  <Grid item xs={12}>
                    <Container style={{ padding: "0px 50px" }}>
                      <Box
                        style={{
                          marginTop: "10px",
                        }}
                      >
                        <Typography variant="h3" color="white">
                          Banco Bancolombia
                        </Typography>

                        <Typography
                          variant={movil ? "p-small" : "p-bold"}
                          color="white"
                        >
                          #### #### #### ####
                        </Typography>
                      </Box>
                    </Container>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box>
          <Image
            src="/images/side-donate.png"
            width={491}
            height={636}
            layout="responsive"
            alt="side-donate"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
