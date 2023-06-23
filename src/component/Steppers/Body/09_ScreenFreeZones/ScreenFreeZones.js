import { Box, Grid, Typography } from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import SelectPrioritesToMemberFamilyComponent from "../../../SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";
import { useFamily } from "../../../../context/context";
import { useEffect } from "react";

function ScreenFreeZones() {
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
          <CancelPresentationIcon fontSize="large" /> We will create some
          screen-free zones for our family by:{" "}
        </Typography>
      </Box>

      <Box>
      <Grid container gap={4}>
          {datas[4].text.map((text, index) => (
            <Grid item xs={12}>
              <SelectPrioritesToMemberFamilyComponent
                index={index}
                //Enviar textos do media balance este Datas é apenas um teste
                data={datas[4]}
              />{" "}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ScreenFreeZones;
