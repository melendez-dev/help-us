import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from "react-slideshow-image";
import { useRouter } from "next/router";
import {
  TextField,
  Box,
  Typography,
  Button,
  Container,
  Grid,
} from "@mui/material";

// redux
import { useSelector } from "react-redux";
export default function Home() {
  // redux
  const movil = useSelector((state) => state.movil.value);

  // router
  const router = useRouter();

  // images
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

  const CustomContainer = movil ? Container : Box;

  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: movil ? "30%" : "50%",
          zIndex: 10,
          left: movil ? undefined : "30%",
          transform: movil ? undefined : "translate(-50%, -50%)",
        }}
      >
        <CustomContainer>
          <Grid container>
            <Grid item xs={12}>
              <Box>
                <Typography
                  variant={movil ? "h2-bold" : "h1-bold"}
                  color="#fff"
                >
                  ¡CONSTRUIR CASAS, <br /> ES SOLO EL {!movil && <br />}{" "}
                  COMIENZO!
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography variant={movil ? "p-small" : "p"} color="#fff">
                  Trabajamos por una sociedad justa, sin pobreza. <br /> Damos
                  esperanza a la población más vulnerable en el <br /> barrio
                  “Las Flores” en la ciudad de Barranquilla, Colombia
                </Typography>
              </Box>
              <Box mt={3}>
                <Button
                  variant="outlined"
                  onClick={() => router.push("/donate")}
                >
                  <span
                    style={{
                      color: "#fff",
                      fontSize: movil ? "10px" : undefined,
                    }}
                  >
                    Involucráte
                  </span>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CustomContainer>
      </Box>

      <Slide duration={4000} autoplay arrows={movil ? false : true}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                height: "705px",
                backgroundSize: "cover",
                backgrounRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
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
