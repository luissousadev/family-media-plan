import { Box, Grid, Typography } from "@mui/material";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import SelectPrioritesToMemberFamilyComponent from "../../../SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";
import { useFamily } from "../../../../context/context";
import { useEffect } from "react";

function ChoosingGoodContent() {
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
          <AddReactionOutlinedIcon fontSize="large" /> We will choose good
          content for our family by:{" "}
        </Typography>
      </Box>

      <Box>
      <Grid container gap={4}>
          {datas[6].text.map((text, index) => (
            <Grid item xs={12}>
              <SelectPrioritesToMemberFamilyComponent
                index={index}
                //Enviar textos do media balance este Datas é apenas um teste
                data={datas[6]}
              />{" "}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ChoosingGoodContent;
