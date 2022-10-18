import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from "react-slideshow-image";
import {
  TextField,
  Box,
  Typography,
  Button,
  Container,
  Grid,
} from "@mui/material";
export default function Home() {
  const slideImages = [
    {
      url: "/images/SlidersHome/slide_one.png",
    },
    {
      url: "/images/SlidersHome/slide_two.png",
    },
    {
      url: "/images/SlidersHome/slide_three.png",
    },
  ];
  return (
    <Box
      style={{
        position: "relative",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: "50%",
          zIndex: 10,
          left: "30%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Box>
              <Typography variant="h1-bold" color="#fff">
                ¡CONSTRUIR CASAS, <br /> ES SOLO EL <br /> COMIENZO!
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="p" color="#fff">
                Trabajamos por una sociedad justa, sin pobreza. <br /> Damos
                esperanza a la población más vulnerable en el <br /> barrio “Las
                Flores” en la ciudad de Barranquilla, Colombia
              </Typography>
            </Box>
            <Box mt={3}>
              <Button variant="outlined">
                <span
                  style={{
                    color: "#fff",
                  }}
                >
                  Involucráte
                </span>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Slide duration={4000}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                height: "705px",
                backgroundSize: "cover",
                backgrounRepeat: "no-repeat",
                backgroundPosition: "center",
                // change black opacity
                //opacity: "0.8",
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </Box>
  );
}
