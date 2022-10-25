import {
  TextField,
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
} from "@mui/material";
import CardBox from "../../shared/Cards/CardBox";
import Image from "next/image";

// slider
import { Fade } from "react-slideshow-image";

// redux
import { useSelector } from "react-redux";

export default function Request() {
  const movil = useSelector((state) => state.movil.value);
  const fadeImages = [
    {
      url: "/images/SecondSlider/slider_one.png",
    },
    {
      url: "/images/SecondSlider/slider_two.png",
    },
  ];
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            style={{
              position: "relative",
            }}
          >
            <Fade
              arrows={false}
              autoplay={true}
              duration={3000}
              infinite={true}
            >
              {fadeImages.map((fadeImage, index) => (
                <div className="each-fade" key={index}>
                  <div className="image-container">
                    <Image
                      src={fadeImage.url}
                      layout="responsive"
                      width={727}
                      height={636}
                      alt="slider"
                    />
                  </div>
                </div>
              ))}
            </Fade>
            {movil && (
              <Box
                style={{
                  position: "absolute",
                  zIndex: 10,
                  top: "15%",
                  left: "6%",
                }}
              >
                <CardBox
                  title="Fundación Ayudemos"
                  colorText="#434343"
                  desc="Para Ayudemos, la responsabilidad social es un compromiso al deber."
                  height="135px"
                  width="90%"
                  background="#F3F3F3	"
                  boxShadow="0px 48px 64px rgba(0, 0, 0, 0.08)"
                  container={true}
                />
              </Box>
            )}
            {movil && (
              <Container
                style={{
                  marginTop: "24px",
                }}
              >
                <Box
                  style={{
                    padding: "8px 24px",
                    height: "48px",
                    background: "#D8705D",
                    textAlign: "center",
                  }}
                >
                  <Typography color="#fff" variant="h3-bold">
                    Solicitudes RTE
                  </Typography>
                </Box>
                <Box mt={4} mb={5}>
                  <Box>
                    <ul>
                      <li
                        style={{
                          marginTop: "6px",
                        }}
                      >
                        <Typography variant="p" color="#434343">
                          Certificado Cumplimiento RF y RL.
                        </Typography>
                      </li>
                      <li
                        style={{
                          marginTop: "6px",
                        }}
                      >
                        <Typography variant="p" color="#434343">
                          Certificado Remuneración.
                        </Typography>
                      </li>
                      <li
                        style={{
                          marginTop: "6px",
                        }}
                      >
                        <Typography variant="p" color="#434343">
                          Extracto acta asamble.
                        </Typography>
                      </li>
                      <li
                        style={{
                          marginTop: "6px",
                        }}
                      >
                        <Typography variant="p" color="#434343">
                          Informe de gestion.
                        </Typography>
                      </li>
                      <li
                        style={{
                          marginTop: "6px",
                        }}
                      >
                        <Typography variant="p" color="#434343">
                          Certificado Antecedentes.
                        </Typography>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Container>
            )}
          </Box>
        </Grid>
        {!movil && (
          <Grid item xs={0} md={6}>
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
                  left: "-30%",
                  top: "10%",
                  zIndex: 10,
                }}
              >
                <CardBox
                  title="FUNDACIÓN AYUDEMOS"
                  colorText="#434343"
                  desc="Para Ayudemos, la responsabilidad social es un compromiso al deber."
                  height="179px"
                  width="100%"
                  background="#F3F3F3	"
                  boxShadow="0px 48px 64px rgba(0, 0, 0, 0.08)"
                  container={true}
                />
              </Box>
              <Box
                style={{
                  position: "absolute",
                  bottom: "50px",
                }}
              >
                <Container>
                  <Container>
                    <Box mt={6}>
                      <Typography variant="h2-bold">solicitudes RTE</Typography>
                    </Box>
                    <Box mt={1}>
                      <Typography variant="p" color="#D8705D">
                        Certificado cumplimiento RF y RL
                      </Typography>
                    </Box>
                    <Box mt={1}>
                      <Typography variant="p" color="#D8705D">
                        Certificado Remuneración
                      </Typography>
                    </Box>
                    <Box mt={1}>
                      <Typography variant="p" color="#D8705D">
                        Extracto acta asamble
                      </Typography>
                    </Box>
                    <Box mt={1}>
                      <Typography variant="p" color="#D8705D">
                        Informe de gestion
                      </Typography>
                    </Box>
                    <Box mt={1}>
                      <Typography variant="p" color="#D8705D">
                        Certificado Antecedentes
                      </Typography>
                    </Box>
                  </Container>
                </Container>
              </Box>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
