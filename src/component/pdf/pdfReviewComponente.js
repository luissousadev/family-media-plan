
import React from "react";
import { Box, Typography } from "@mui/material";
import { AvatarWithBadge } from "../AvatarWithBadge";
import { BoxStyle,  ReviewTypographyStyle, UlStyle } from "./pdfReviewStyle";


const MyPDFReviewComponent = ({ family, member }) => (
    <Box sx={{border: '1px solid', padding: '1.5rem', background: 'white'}}>
        <BoxStyle sx={{display:'flex'}}>
            <Box sx={{paddingRight: '1rem'}}>
                <AvatarWithBadge
                url={"https://www.pngmart.com/files/5/Poro-PNG-Image.png"}
                onSmallBadgeClick={() => {
                    console.log(
                    "Implementar logica para abrir a midal para editar o avatar."
                    );
                }}
                />
            </Box>
            <Box>
                <Typography> {member.nameMember} </Typography>
                <Typography> {member.age} </Typography>
            </Box>
        </BoxStyle>
        <Box>
            <hr style={{marginBottom: '7px'}}></hr>
            <hr style={{marginBottom: '1rem'}}></hr>
        </Box>
        <BoxStyle>
            <Typography sx={{fontSize: '34px'}}> The {family.familyName} Family Media Plan </Typography>  
        </BoxStyle>

        <BoxStyle>
            {family.hasMediaBalance && (
                <>
                <ReviewTypographyStyle> {member.mediaBalance.titleSection} </ReviewTypographyStyle>
                <Box sx={{marginLeft:'2rem'}}>
                    <UlStyle >
                        {member.mediaBalance.topicos.map((topico, index) => (
                            <li key={index}>{topico}</li>
                        ))}
                    </UlStyle> 
                </Box>
                </>
            )}           
        </BoxStyle>

        <BoxStyle>
            {family.hasMediaBalance && (
                <>
                <ReviewTypographyStyle> {member.mediaBalance.titleSection} </ReviewTypographyStyle>
                <Box sx={{marginLeft:'2rem'}}>
                    <UlStyle >
                        {member.mediaBalance.topicos.map((topico, index) => (
                            <li key={index}>{topico}</li>
                        ))}
                    </UlStyle> 
                </Box>
                </>
            )}           
        </BoxStyle>

        <BoxStyle>
            {family.hasMediaBalance && (
                <>
                <ReviewTypographyStyle> {member.mediaBalance.titleSection} </ReviewTypographyStyle>
                <Box sx={{marginLeft:'2rem'}}>
                    <UlStyle >
                        {member.mediaBalance.topicos.map((topico, index) => (
                            <li key={index}>{topico}</li>
                        ))}
                    </UlStyle> 
                </Box>
                </>
            )}           
        </BoxStyle>

        <BoxStyle>
            {family.hasMediaBalance && (
                <>
                <ReviewTypographyStyle> {member.mediaBalance.titleSection} </ReviewTypographyStyle>
                <Box sx={{marginLeft:'2rem'}}>
                    <UlStyle >
                        {member.mediaBalance.topicos.map((topico, index) => (
                            <li key={index}>{topico}</li>
                        ))}
                    </UlStyle> 
                </Box>
                </>
            )}           
        </BoxStyle>

        <BoxStyle>
            {family.hasMediaBalance && (
                <>
                <ReviewTypographyStyle> {member.mediaBalance.titleSection} </ReviewTypographyStyle>
                <Box sx={{marginLeft:'2rem'}}>
                    <UlStyle >
                        {member.mediaBalance.topicos.map((topico, index) => (
                            <li key={index}>{topico}</li>
                        ))}
                    </UlStyle> 
                </Box>
                </>
            )}           
        </BoxStyle>

        <BoxStyle>
            {family.hasMediaBalance && (
                <>
                <ReviewTypographyStyle> {member.mediaBalance.titleSection} </ReviewTypographyStyle>
                <Box sx={{marginLeft:'2rem'}}>
                    <UlStyle >
                        {member.mediaBalance.topicos.map((topico, index) => (
                            <li key={index}>{topico}</li>
                        ))}
                    </UlStyle> 
                </Box>
                </>
            )}           
        </BoxStyle>

        <BoxStyle>
            {family.hasMediaBalance && (
                <>
                <ReviewTypographyStyle> {member.mediaBalance.titleSection} </ReviewTypographyStyle>
                <Box sx={{marginLeft:'2rem'}}>
                    <UlStyle >
                        {member.mediaBalance.topicos.map((topico, index) => (
                            <li key={index}>{topico}</li>
                        ))}
                    </UlStyle> 
                </Box>
                </>
            )}           
        </BoxStyle>
    </Box>
  );
  
  export default MyPDFReviewComponent;
  