import { TextField, Box, Typography, Button, Container } from "@mui/material";
export default function AboutUs() {
  return (
    <Container>
      <Box>
        <Box>
          <Typography variant="h2-bold" color="secondary">
            Nuestra <b>historia</b>
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography variant="p" color="secondary">
            Movidas por el sentimiento de fraternidad y solidaridad por las
            familias en situación de vulnerabilidad, un grupo de damas y amigas
            barranquilleras, decidieron trabajar por el bienestar de las madres
            cabeza de hogar residentes en el barrio Las Flores, situado en el
            brazo occidental del río magdalena en la ciudad de Barranquilla,
            Colombia.
          </Typography>
        </Box>

        <Box>
          <Typography variant="p" color="secondary">
            Conscientes de que en su ciudad muchos son los sectores marginados
            que necesitaban ayuda, sus miras se fijaron a la comunidad del
            barrio Las Flores, donde la pesca era uno de los pocos modos de
            subsistencia de muchas familias que vivían en extrema pobreza, en
            casas con paredes de cartón y techos de plástico y las mujeres
            cabezas de hogar sin poder contar con los recursos y oportunidades
            para sostener a sus hijos.
          </Typography>
        </Box>

        <Box>
          <Typography variant="p" color="secondary">
            De esta iniciativa se fundó Ayudemos en el año 1984, siendo este un
            voluntariado sin ánimo de lucro, desde el comienzo sus voluntarias:
            Cecilia de Celia, Margarita de Osorio, Carmen de Vengoechea, Maribel
            de De Hart, Yolanda de Ángulo, Margarita de Gieseken, Nora de
            Gutiérrez, Gladys de Peréz, Toty de Dugand, Lucía de Fernández de
            Castro, Susana de Dangond, Julia Sofía de Valiente, Leonor de
            Jaramillo, Leonor C. de Maestre, Maria Josefa Echavarría, Adelita
            Renowitzky y Rosalvina de De Castro. Han trabajado permanentemente
            con el mismo entusiasmo que mantienen hoy, haciendo eventos para
            recoger fondos, tocando puerta a las empresas privadas y dejando el
            legado a sus generaciones para continuar cambiando vidas. Hoy
            Ayudemos cuenta con Personería Jurídica, NIT 900-166289-9 y hasta la
            fecha ha construido 52 viviendas que han sido intervenidas y
            entregadas exitosamente.
          </Typography>
        </Box>

        
        <Box>
        <Box mt={3}><Typography variant="h2-bold" color="secondary">
            Valores
        </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="p" color="secondary">
          <b>Solidaridad:</b> Construimos un enfoque de preservación de los derechos fundamentales constitucionales, orientados a erradicar la desigualdad a través de acciones encaminadas a proteger la vivienda digna y el ambiente sano en la comunidad con la que trabajamos.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="p" color="secondary">
          <b>Compromiso:</b> Estamos comprometidas en el cumplimiento de nuestra misión, visión y con la dignidad humana como principio fundamental de nuestras actuaciones.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="p" color="secondary">
          <b>Excelencia:</b> Aseguramos la consecución de nuestros objetivos y buscamos el mayor impacto de nuestras actuaciones a través de la calidad y la optimización de nuestras capacidades y recursos.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="p" color="secondary">
          <b>Transparencia:</b> Basamos nuestra labor en la honestidad, la mutua responsabilidad y el máximo acceso a la información, como pilares de una rendición de cuentas social y económica ante nuestros colaboradores, donantes, beneficiarios y ante la sociedad en general.
          </Typography>
        </Box>

        <Box marginY={7} mt={3}>
          <Typography variant="p" color="secondary">
          <b>Unidad:</b> Creemos en el trabajo en equipo y en la colaboración con otras instituciones para potenciar sinergias y mejorar el rendimiento de nuestro trabajo.
          </Typography>
        </Box>
        </Box>




      </Box>
    </Container>
  );
}