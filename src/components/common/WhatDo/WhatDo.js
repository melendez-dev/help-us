import CardWithIcon from "../../shared/Cards/CardWithIcon";
import {
  IconArrowRight,
  IconBook,
  IconBuilding,
  IconEnergy,
  IconFaebook,
  IconFamily,
  IconHealt,
  IconInstagram,
  IconJudge,
  IconHouse,
  IconSex,
  IconLove,
  IconCloseQuote,
  IconOpenQuote,
} from "../../../assest/icons/config";
import {
  TextField,
  Box,
  Typography,
  Button,
  Container,
  Card,
  Grid,
} from "@mui/material";

// MAP
import MapGoogle from "../../shared/Maps/Map";

// video
import ReactPlayer from "react-player";

// import TextLine component
import TextLine from "../../shared/TextLine/TextLine";
import Image from "next/image";

export default function WhatDo() {
  return (
    <Box>
      <div
        style={{
          backgroundImage: "url(/images/header-who-do.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 500,
          position: "relative",
        }}
      >
        <Container>
          <Box
            style={{
              position: "absolute",
              top: "25%",
            }}
          >
            <Box>
              <Typography variant="h2-bold" color="secondary">
                Juntos{" "}
                <span
                  style={{
                    fontWeight: 900,
                  }}
                >
                  podemos <br />
                  construir sueños
                </span>
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="p" color="secondary">
                Nuestro principal proyecto es acercar a las <br /> familias más
                vulnerables del barrio “las Flores” a una vivienda <br />
                digna. Buscamos dar respuesta al déficit habitacional <br />
                originado por la situación de pobreza que afecta a esta <br />
                población en Barranquilla, Colombia.
              </Typography>
            </Box>
          </Box>
        </Container>
      </div>
      <Card
        style={{
          background: "#D8705D",
          height: "296px",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid container spacing="1">
            <Grid item xs="4">
              <Box>
                <Typography variant="h1" color="#f3f3f3">
                  IMPACTO
                </Typography>
              </Box>
              <Box>
                <Typography variant="h1-bold" color="#f3f3f3">
                  SOCIAL
                </Typography>
              </Box>
            </Grid>

            <Grid item xs="4">
              <Box>
                <IconHouse />
              </Box>
              <Box>
                <Typography variant="h1-bold" color="#f3f3f3">
                  52
                </Typography>
              </Box>
              <Box>
                <Typography variant="p" color="#f3f3f3">
                  Casas construidas y donadas
                </Typography>
              </Box>
            </Grid>

            <Grid item xs="4">
              <Box>
                <IconLove />
              </Box>
              <Box>
                <Typography variant="h1-bold" color="#f3f3f3">
                  322
                </Typography>
              </Box>
              <Box>
                <Typography variant="p" color="#f3f3f3">
                  Familias con un nuevo hogar
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Card>
      <Container style={{ marginBottom: "50px" }}>
        <TextLine text="Proyectos" color="#F3F3F3" fontColor="#000" />
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          mt={5}
          mb={5}
        >
          <video autoPlay controls>
            <source src="/videos/video-what-do.mp4" />
          </video>
        </Box>
      </Container>

      <Container style={{ marginBottom: "40px" }}>
        <Box
          style={{
            marginBottom: "50px",
          }}
        >
          <TextLine text="Beneficiaria" color="#F3F3F3" fontColor="#000" />
        </Box>

        <Box mt={3}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  style={{
                    // 180 grades icon
                    transform: "rotate(180deg)",
                    alignSelf: "center",
                    marginRight: "10px",
                  }}
                >
                  <IconArrowRight color="black" />
                </Box>
                <Box
                  style={{
                    display: "flex",
                  }}
                >
                  <Box>
                    <IconOpenQuote />
                  </Box>
                  <Box
                    style={{
                      padding: "0 20px",
                    }}
                  >
                    <Typography variant="h3-bold">
                      En mi casa anterior se me metía el agua y no teníamos
                      baño, esta ayuda no solo me beneficia a mí, también al
                      barrio.
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      alignSelf: "end",
                    }}
                  >
                    <IconOpenQuote />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Box>
                    <img
                      src="/images/testimonial.png"
                      width={189}
                      height={160}
                    />
                  </Box>
                  <Box mt={1}>
                    <Typography variant="p" color="#434343">
                      Carmen Cecilia Jiménez, madre <br />
                      beneficiaria de barrio las flores
                    </Typography>
                  </Box>
                </Box>
                <Box
                  ml="4%"
                  style={{
                    transform: "rotate(180)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconArrowRight />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box
        style={{
          backgroundColor: "#F3F3F3",
          padding: "50px",
        }}
      >
        <Container marginY={6}>
          {/*pass this in an different component sharepass this in an different component sharedd*/}
          <Box>
            <TextLine text="Líneas de acción" color="#D8705D" />
          </Box>

          <Box marginY={6}>
            <Typography variant="p" color="secondary" fontColor="#fff">
              La vivienda, un derecho humano. Ayudemos se enfoca en el derecho a
              la vivienda, como clave para la consecución de los Objetivos de
              Desarrollo Sostenible (ODS). En 2015, los Estados Miembros de las
              Naciones Unidas aprobaron 17 Objetivos como parte de la Agenda
              2030 para el Desarrollo Sostenible, donde se establece un plan
              para alcanzarlos en 15 años. La Agenda 2030 y los Objetivos de
              Desarrollo Sostenible (ODS) establecen una hoja de ruta para
              avanzar en los grandes retos sociales, económicos y
              medioambientales, configurando una iniciativa para la
              incorporación de los derechos humanos en las políticas públicas,
              tanto desde los objetivos como mediante los instrumentos. En este
              sentido, Ayudemos impacta a través de su labor directamente con
              ocho de los ODS: 1, 3, 4, 5, 7, 10, 11.
            </Typography>
          </Box>

          <CardWithIcon
            title="ODS 1: FIN DE LA POBREZA"
            icon={<IconFamily />}
            desc="La vivienda supone el mayor impacto en el coste de la vida de las ciudades, además de ser la principal dimensión que explica la exclusión social junto al empleo."
            background="#D33C42"
            height="144px"
          />
          <CardWithIcon
            title="ODS 3: SALUD Y BIENESTAR"
            icon={<IconHealt />}
            desc="Una vivienda en mal estado o la falta de la misma afecta a la salud física, mental y social de las personas, con especial impacto en la población en situación de mayor vulnerabilidad, como en infancia y en personas mayores."
            background="#629D47"
            height="168px"
          />
          <CardWithIcon
            title="ODS 4: EDUCACIÓN DE CALIDAD"
            icon={<IconBook />}
            desc="Una vivienda adecuada, independiente y que disponga de espacios para el estudio es clave para el desempeño escolar."
            background="#B52F34"
            height="120px"
          />
          <CardWithIcon
            title="ODS 5: IGUALDAD DE GÉNERO"
            icon={<IconSex />}
            desc="La exclusión residencial y los problemas de vivienda, como los desalojos, afectan en mayor medida a las mujeres, siendo especialmente relevante el impacto en las mujeres solas con hijos/as."
            background="#EB4D34"
            height="168px"
          />
          <CardWithIcon
            title="ODS 7: ENERGÍA ASEQUIBLE Y NO CONTAMINANTE"
            icon={<IconEnergy />}
            desc="La pobreza energética es una de las dimensiones de la exclusión residencial y que afecta en mayor medida a los pagos de la vivienda, con una prevalencia mayor en grupos vulnerables."
            background="#E4AD14"
            height="144px"
          />
          <CardWithIcon
            title="ODS 10: REDUCCIÓN DE LAS DESIGUALDADES"
            icon={<IconJudge />}
            desc="La falta de vivienda es uno de los factores que más influye en la transmisión intergeneracional de la pobreza, al ser el patrimonio inmobiliario clave en la desigualdad de rentas."
            background="#CB3167"
            height="144px"
          />
          <CardWithIcon
            title="ODS 11: CIUDADES Y COMUNIDADES SOSTENIBLES"
            icon={<IconBuilding />}
            desc="La falta de viviendas asequibles y adecuadas está detrás de gran parte de los problemas de exclusión residencial. Es necesaria la provisión de vivienda social y asequible para conseguir asegurar el acceso a una casa a todas las personas."
            background="#DD9847"
            height="168px"
          />
        </Container>
      </Box>

      <Container marginY={6}>
        <Box>
          <TextLine text="Ubicacion del proyecto" color="#D8705D" />
          <Box marginY={6}>
            <Typography variant="p" color="#434343">
              52 viviendas intervenidas en el barrio “Las Flores” en la ciudad
              de Barranquilla.
            </Typography>
          </Box>
          <Box mb={8}>
            <MapGoogle />
          </Box>
        </Box>
      </Container>

      
    </Box>
  );
}
