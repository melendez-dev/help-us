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
export default function WhatDo() {
  return (
    <Box>
      <div
        style={{
          backgroundImage: "url(/images/header-who-do.png)",
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
      <Card>
        <Grid
          container
          spacing="1"
          style={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            alignItems: "center",
            background: "#D8705D",
            height: "296px",
            position: "relative",
          }}
        >
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
      </Card>
      <Container></Container>

			<Container marginRight={4} marginLeft={4} marginY={6}>
				{/*pass this in an different component sharepass this in an different component sharedd*/}
        <Box
          mt={5}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h2-bold"
              color="#fff"
              style={{
                backgroundColor: "#D8705D",
                padding: "10px",
              }}
            >
              Líneas de acción
            </Typography>
          </Box>
          <Box
            style={{
              width: "537px",
              height: "5px",
              backgroundColor: "#D8705D",
              marginLeft: "20px",
            }}
          ></Box>
        </Box>

        <Box marginY={6}>
          <Typography variant="p" color="secondary">
            La vivienda, un derecho humano. Ayudemos se enfoca en el derecho a
            la vivienda, como clave para la consecución de los Objetivos de
            Desarrollo Sostenible (ODS). En 2015, los Estados Miembros de las
            Naciones Unidas aprobaron 17 Objetivos como parte de la Agenda 2030
            para el Desarrollo Sostenible, donde se establece un plan para
            alcanzarlos en 15 años. La Agenda 2030 y los Objetivos de Desarrollo
            Sostenible (ODS) establecen una hoja de ruta para avanzar en los
            grandes retos sociales, económicos y medioambientales, configurando
            una iniciativa para la incorporación de los derechos humanos en las
            políticas públicas, tanto desde los objetivos como mediante los
            instrumentos. En este sentido, Ayudemos impacta a través de su labor
            directamente con ocho de los ODS: 1, 3, 4, 5, 7, 10, 11.
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

      <Box>
        <Box>
          <Typography variant="h1" color="#F3F3F3">
            Ubicación del proyecto
          </Typography>
        </Box>
        <Box>
          <Typography variant="p" color="#434343">
            52 viviendas intervenidas en el barrio “Las Flores” en la ciudad de
            Barranquilla.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
