import {
  TextField,
  Box,
  Typography,
  Button,
  Container,
  Card,
} from "@mui/material";
import CardBox from "../../shared/Cards/CardBox";

// crea un componente en /src/component/common/nombreQueTuQuieras/nombreDELARCHIVO.js
//import NOMBRE_DEL_COMPONENTE from "LA_RUTA"
export default function Request() {
  return (
    <Container>
      <CardBox
        title="FUNDACIÓN AYUDEMOS"
        colorText="black"
        desc="Para Ayudemos, la responsabilidad social es un compromiso al deber."
        height="179px"
        width="579px"
        background="#F3F3F3	"
      />

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
  );
}
