import CardWithIcon from "../../shared/Cards/CardWithIcon";
import { IconFaebook } from "../../../assest/icons/config";
import { TextField, Box, Typography, Button, Container, Card } from "@mui/material";
export default function WhatDo() {
  return (
    <Box>
      <Box>
        <Box>
          <Typography variant="h2-bold" color="secondary">
            Juntos <b>podemos construir sueños</b>
          </Typography>
        </Box>

        <Box>
          <Typography variant="p" color="secondary">
            Nuestro principal proyecto es acercar a las familias más vulnerables
            del barrio “las Flores” a una vivienda digna. Buscamos dar respuesta
            al déficit habitacional originado por la situación de pobreza que
            afecta a esta población en Barranquilla, Colombia.
          </Typography>
        </Box>
      </Box>


      <Box>
        <p>Líneas de acción</p>
      </Box>

      <Box marginY={6}>
        <Typography variant="p" color="secondary">
        La vivienda, un derecho humano. Ayudemos se enfoca en el derecho a la vivienda, como clave para la consecución de los Objetivos de Desarrollo Sostenible (ODS). En 2015, los Estados Miembros de las Naciones Unidas aprobaron 17 Objetivos como parte de la Agenda 2030 para el Desarrollo Sostenible, donde se establece un plan para alcanzarlos en 15 años. La Agenda 2030 y los Objetivos de Desarrollo Sostenible (ODS) establecen una hoja de ruta para avanzar en los grandes retos sociales, económicos y medioambientales, configurando una iniciativa para la incorporación de los derechos humanos en las políticas públicas, tanto desde los objetivos como mediante los instrumentos. En este sentido, Ayudemos impacta a través de su labor directamente con ocho de los ODS: 1, 3, 4, 5, 7, 10, 11.
        </Typography>
      </Box>

      <Box
      marginRight={4}
      marginLeft={4} 
      marginY={6}>
        <CardWithIcon
          title="ODS 1: FIN DE LA POBREZA"
          icon={<IconFaebook />}
          desc="La vivienda supone el mayor impacto en el coste de la vida de las ciudades, además de ser la principal dimensión que explica la exclusión social junto al empleo."
          background="#D33C42"
          height="144px"
        />
        <CardWithIcon
          title="ODS 3: SALUD Y BIENESTAR"
          icon={<IconFaebook />}
          desc="Una vivienda en mal estado o la falta de la misma afecta a la salud física, mental y social de las personas, con especial impacto en la población en situación de mayor vulnerabilidad, como en infancia y en personas mayores."
          background="#629D47"
          height="168px"
        />
        <CardWithIcon
          title="ODS 4: EDUCACIÓN DE CALIDAD"
          icon={<IconFaebook />}
          desc="Una vivienda adecuada, independiente y que disponga de espacios para el estudio es clave para el desempeño escolar."
          background="#B52F34"
          height="120px"
        />
        <CardWithIcon
          title="ODS 5: IGUALDAD DE GÉNERO"
          icon={<IconFaebook />}
          desc="La exclusión residencial y los problemas de vivienda, como los desalojos, afectan en mayor medida a las mujeres, siendo especialmente relevante el impacto en las mujeres solas con hijos/as."
          background="#EB4D34"
          height="168px"
        />
        <CardWithIcon
          title="ODS 7: ENERGÍA ASEQUIBLE Y NO CONTAMINANTE"
          icon={<IconFaebook />}
          desc="La pobreza energética es una de las dimensiones de la exclusión residencial y que afecta en mayor medida a los pagos de la vivienda, con una prevalencia mayor en grupos vulnerables."
          background="#E4AD14"
          height="144px"
        />
        <CardWithIcon
          title="ODS 10: REDUCCIÓN DE LAS DESIGUALDADES"
          icon={<IconFaebook />}
          desc="La falta de vivienda es uno de los factores que más influye en la transmisión intergeneracional de la pobreza, al ser el patrimonio inmobiliario clave en la desigualdad de rentas."
          background="#CB3167"
          height="144px"
        />
        <CardWithIcon
          title="ODS 11: CIUDADES Y COMUNIDADES SOSTENIBLES"
          icon={<IconFaebook />}
          desc="La falta de viviendas asequibles y adecuadas está detrás de gran parte de los problemas de exclusión residencial. Es necesaria la provisión de vivienda social y asequible para conseguir asegurar el acceso a una casa a todas las personas."
          background="#DD9847"
          height="185px"
        />
      </Box>

      <Box>
        <Box>
            <Typography variant="h1" color="#F3F3F3">
            Ubicación del proyecto
            </Typography> 
        </Box>
        <Box>
        <Typography variant="p" color="#434343">
        52 viviendas intervenidas en el barrio “Las Flores” en la ciudad de Barranquilla.
            </Typography> 
        </Box>


      </Box>


      
    </Box>
  );
}
