import { Box, Grid, Typography } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import SelectPrioritesToMemberFamilyComponent from "../../../SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";
import { useFamily } from "../../../../context/context";
import { useEffect } from "react";

function CommunicatingAboutMedia() {
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
          <PersonSearchIcon fontSize="large" /> We will help balance tech with
          online and offline activities by:{" "}
        </Typography>
      </Box>

      <Box>
      <Grid container gap={4}>
          {datas[1].text.map((text, index) => (
            <Grid item xs={12}>
              <SelectPrioritesToMemberFamilyComponent
                index={index}
                //Enviar textos do media balance este Datas é apenas um teste
                data={datas[1]}
              />{" "}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default CommunicatingAboutMedia;
