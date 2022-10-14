import { Box, Grid } from "@mui/material";
export default function CardWithIcon({
  icon,
  title,
  desc,
  background,
  height,
}) {
  return (
    <Box
      style={{
        background: background,
				height: height,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={3}>
          {icon}
        </Grid>
        <Grid item xs={1}>
          <Box
            style={{
              width: "1px",
              height: "100%",
              background: "#fff",
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Box>{title}</Box>
          <Box>{desc}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
