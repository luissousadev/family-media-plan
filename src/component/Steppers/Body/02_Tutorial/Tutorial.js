import { Box } from "@mui/material"
import { useWindowSize } from "../../../../hooks/useWindowSize";

function Tutorial() {
  const windowSize = useWindowSize();

  const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;
  const DESKTOP_SMALL_SIZE = 1023;
  return (
    <Box >
      <Box >
        <Box 
        padding={isMobile(windowSize) ? "" : "3rem"}
        sx={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            width={isMobile(windowSize) ? "350" : "660"}
            height={isMobile(windowSize) ? "250" : "415"}            
            src="https://www.youtube.com/embed/A1FLenG0imk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>   
        </Box>
      </Box>
    </Box>
  )
}

export default Tutorial