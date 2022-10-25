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

export default function Request() {
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
        <Grid item xs={6}>
          <Fade arrows={false} autoplay={true} duration={3000} infinite={true}>
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
        </Grid>
        <Grid item xs={6}>
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
      </Grid>
    </Box>
  );
}
