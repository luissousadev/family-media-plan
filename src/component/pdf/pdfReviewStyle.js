import { styled } from "@mui/material/styles";
import { Box,Typography } from "@mui/material";


export const ReviewTypographyStyle = styled(Typography)(({theme}) => ({
    fontSize: '20px',
    fontWeight: 700,
    textDecoration: 'underline'
  }))

  export const BoxStyle = styled(Box)(({theme}) => ({
    marginBottom:'1.5rem',
    lineHeight: '2rem'
  }))

  export const UlStyle = styled('ul')(({theme}) => ({
    fontWeight: 700
  }))

