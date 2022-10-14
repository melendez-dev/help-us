import { TextField, Box, Typography, Button, Container } from "@mui/material";
export default function Home() {
  return (
    <Container>
        <Box>

           <Box> 
        <Typography variant="h1" color="#f3f3f3">
          ¡Construir casas, es solo el comienzo!
        </Typography>
      </Box>

      <Box>
      <Typography variant="p" color="#f3f3f3">
        ¡Trabajamos por una sociedad justa, sin pobreza. Damos esperanza a la
        población más vulnerable en el barrio “Las Flores” en la ciudad de
        Barranquilla, Colombia
      </Typography>
      </Box>

      <Button width="82px" height="21px">
        Involúcrate
      </Button>




     </Box>
    </Container>
  );
}
