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
export default function Donate() {
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
              right: "-7%",
              top: "18%",
              zIndex: 10,
            }}
          >
            <Card
              style={{
                background: "#D8705D",
                width: "574px",
                height: "462px",
                borderRadius: "12px",
              }}
            >
              <Box
                style={{
                  padding: "62px",
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
                        <Typography variant="h2" color="white">
                          Transferencia Bancaria
                        </Typography>
                      </Box>
                      <Box mt={2} style={{ textAlign: "center" }}>
                        <Typography variant="p" color="white">
                          ¡Estás a punto de apoyar la construcción de{" "}
                          <b>un nuevo hogar</b> para quienes más lo necesitan!
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid xs={12}>
                    <Container
                      style={{
                        padding: "0px 50px",
                      }}
                    >
                      <Box mt={6}>
                        <Typography variant="h3" color="white">
                          Banco Davivienda
                        </Typography>

                        <Typography variant="p-bold" color="white">
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

                        <Typography variant="p-bold" color="white">
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
          />
        </Box>
      </Grid>
    </Grid>
  );
}
