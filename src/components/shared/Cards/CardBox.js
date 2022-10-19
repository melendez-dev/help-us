import { Box, Grid, Typography } from "@mui/material";
export default function CardBox({
    title,
    desc,
    background,
    height,
    width,
    colorText = "#F3F3F3",
}) {
    return (
        <Box
            style={{
            title: title,
            desc: desc,
            background: background,
            height: height,
            width: width,
            borderRadius: "12px",
            marginTop: "30px",
          }}>
            <Box>
            <Grid conteiner spacing={1}>
            <Grid style={{  textAlign: "Right" }} marginTop="15px"  item xs={12}/>
            </Grid>
            </Box>
            <Typography variant="h1-bold" color="#D8705D">
                {title}
            </Typography>
            <Box>
            <Box>
            <Typography variant="p" color={colorText}> {desc}</Typography>
          </Box>


            </Box>
        </Box>
    )
}
