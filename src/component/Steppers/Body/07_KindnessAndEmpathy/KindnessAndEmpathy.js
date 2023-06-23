import { Box, Grid, Typography } from "@mui/material";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SelectPrioritesToMemberFamilyComponent from "../../../SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";
import { useFamily } from "../../../../context/context";
import { useEffect } from "react";

function KindnessAndEmpathy() {
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
    <Grid>
      <Box>
        <Typography variant="h4">
          {" "}
          <EmojiPeopleIcon fontSize="large" /> We will emphasize kindness and
          empathy when using technology by:{" "}
        </Typography>
      </Box>
      <Box>
      <Grid container gap={4}>
          {datas[2].text.map((text, index) => (
            <Grid item xs={12}>
              <SelectPrioritesToMemberFamilyComponent
                index={index}
                //Enviar textos do media balance este Datas é apenas um teste
                data={datas[2]}
              />{" "}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
}

export default KindnessAndEmpathy;
