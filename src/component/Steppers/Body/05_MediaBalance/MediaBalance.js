import { Box, Grid, Typography } from "@mui/material";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import SelectPrioritesToMemberFamilyComponent from "../../../SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";
import { useFamily } from "../../../../context/context";
import { useEffect } from "react";

function MediaBalance() {
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
    <Box sx={{ width: "100%" }}>
      <Box>
        <Typography variant="h4">
          {" "}
          <DirectionsBikeIcon fontSize="large" /> We will help balance tech with
          online and offline activities by:{" "}
        </Typography>
      </Box>

      <Box>
        <Grid container gap={4}>
          {datas[0].text.map((text, index) => (
            <Grid item xs={12}>
              <SelectPrioritesToMemberFamilyComponent
                index={index}
                //Enviar textos do media balance este Datas é apenas um teste
                data={datas[0]}
              />{" "}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default MediaBalance;
