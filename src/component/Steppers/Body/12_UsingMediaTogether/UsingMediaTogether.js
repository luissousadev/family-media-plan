import { Box, Grid, Typography } from "@mui/material";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import SelectPrioritesToMemberFamilyComponent from "../../../SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";
import { useFamily } from "../../../../context/context";
import { useEffect } from "react";

function UsingMediaTogether() {
  const { datas, members, family, setLocalStorage } = useFamily();

  const setDataLocalStorage = (data) => {    
    let familyData = {};
    if (data) {
      familyData = { ...family, familyMembers: [...members] };
      setLocalStorage(familyData);
    }
  };

  useEffect(() => {
    setDataLocalStorage(family);
  }, []);

  return (
    <Box>
      <Box>
        <Typography variant="h4">
          {" "}
          <SlideshowOutlinedIcon fontSize="large" /> We will use media together
          more often by:{" "}
        </Typography>
      </Box>

      <Box>
      <Grid container gap={4}>
          {datas[7].text.map((text, index) => (
            <Grid item xs={12}>
              <SelectPrioritesToMemberFamilyComponent
                index={index}
                //Enviar textos do media balance este Datas é apenas um teste
                data={datas[7]}
              />{" "}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default UsingMediaTogether;
