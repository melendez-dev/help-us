import { TextField, Box, Typography, Button, Container } from "@mui/material";
import CardBox from "../../shared/Cards/CardBox";


// crea un componente en /src/component/common/nombreQueTuQuieras/nombreDELARCHIVO.js
//import NOMBRE_DEL_COMPONENTE from "LA_RUTA"
export default function Request() {
	return (
		<Container>
			<CardBox
			title="hello word"
			desc="hello word"
			height="179px"
			width="579px"
			

			/>
			{/*AQUI IMPORTA EL COMPONENTE*/}
			{/* <NOMBRE_DEL_COMPONENTE />*/}


		</Container>
	) 
}

