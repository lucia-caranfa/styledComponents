import React from 'react'
import styled, {css, keyframes, ThemeProvider} from "styled-components"



function ComponenteEstilizado() {

    let mainColor="#db7093",
        mainAlphaColor80="#db709380";

        const setTransitionTime = (time) => `all ${time} ease-in-out`; //funcion para tansiciones

        const fadeIn = keyframes`  //se usa para traer animaciones
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }`

    const MyH3 = styled.h3`
    padding:2rem;
    text-align:center;
    background-color: ${mainColor};
    transition: ${setTransitionTime("1s")};
    &:hover{
        background-color: ${mainAlphaColor80};
    }
    color: ${({color})=> color || "#3e3d3d"}; //se le pasan props al elemento color para luego utilizar dicha propiedad
    //tambien indicamos que si la propiedad color no se llama, el resto de las tipografias tendrian color gris

    ${({isButton})=>isButton && css `   
    margin:auto;
    max-width: 50%;
    border-radius:0.5rem;
    cursor:pointer;
    `}  //se usa css para incorporar mas estilos extra a una propiedad

    animation:${fadeIn} 5s ease-out;
    `;

    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
    `;

const light = {  //variables de color para el themeProvider
    color: "#222",
    bgColor: "#DDD",
}
const dark = {
    color: "#DDD",
    bgColor: "#222",
}

    const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    text-align:center;
    color: ${({theme})=>theme.color};  //relaciona el theme del themeProvider con las props
    background-color: ${({theme})=>theme.bgColor};
    `;

const BoxRounded = styled(Box)`  //arrastra el estilo del Box y le suma otra propiedad
border-radius: 1rem;
`;

    return (
        <>
            <h2>Componente Estilizado</h2>

            <MyH3>Soy un H3 estilizado</MyH3>
            <MyH3 color='#61dafb'>Soy otro H3 estilizado</MyH3>  {/*utilizamos color como propiedad*/}
            <MyH3 isButton>Soy un H3 estilizado como botón</MyH3> {/*se traen todos los estilos de isButton*/}

            <Title>
                Hello World!
            </Title>

            <ThemeProvider theme={light}>  {/*trae toda la caja de estilo del theme relacionado*/}
              <Box> Soy una caja light </Box>
              <BoxRounded> Soy una caja redondeada light </BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
              <Box> Soy una caja dark </Box>
              <BoxRounded> Soy una caja redondeada light </BoxRounded>
            </ThemeProvider>
        </>
    )
}

export default ComponenteEstilizado