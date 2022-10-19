import {
  TextField,
  Box,
  Typography,
  Button,
  Container,
  Card,
  Grid,
} from "@mui/material";
import CardBox from "../../shared/Cards/CardBox";
export default function ContactUs() {
  return (
    <Box>
      <Grid container spacing="1">
          <Grid item xs={12}>
      <Card>
        <Grid
          container
          spacing="12"
          style={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            alignItems: "center",
            background: "#D8705D",
            height: "465px",
            width: "574px",
          }}
        >
          <Box>
            <Typography variant="h2" color="white">
              Transferencia Bancaria
            </Typography>

            <Typography variant="p" color="white">
              ¡Estás a punto de apoyar la construcción de <b>un nuevo hogar</b>{" "}
              para quienes más lo necesitan!
            </Typography>
          </Box>

          <Box>
            <Typography variant="h3" color="white">
              Banco Davivienda
            </Typography>

            <Typography variant="p-bold" color="white">
              #### #### #### #####
            </Typography>
          </Box>

          <Box>
            <Typography variant="h3" color="white">
              Banco Bancolombia
            </Typography>

            <Typography variant="p-bold" color="white">
              #### #### #### #####
            </Typography>
          </Box>
        </Grid>
      </Card>
      </Grid>
        </Grid>
    </Box>
  );
}
