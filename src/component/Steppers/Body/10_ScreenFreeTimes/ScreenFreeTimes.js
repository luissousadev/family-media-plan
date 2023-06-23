import { Box, Grid, Typography } from "@mui/material";
import NoCellIcon from "@mui/icons-material/NoCell";
import SelectPrioritesToMemberFamilyComponent from "../../../SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";
import { useFamily } from "../../../../context/context";
import { useEffect } from "react";

function ScreenFreeTimes() {
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
          <NoCellIcon fontSize="large" /> We will choose times and spaces where
          we don't want distractions from screens by:{" "}
        </Typography>
      </Box>

      <Box>
        <Grid container gap={4}>
          {datas[5].text.map((text, index) => (
            <Grid item xs={12}>
              <SelectPrioritesToMemberFamilyComponent
                index={index}
                //Enviar textos do media balance este Datas é apenas um teste
                data={datas[5]}
              />{" "}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ScreenFreeTimes;
