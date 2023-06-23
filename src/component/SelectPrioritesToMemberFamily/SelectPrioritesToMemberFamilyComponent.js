import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  Box,
  Button,
  Grid,
  Stack,
  ToggleButton,
  Typography,
} from "@mui/material";
import { useFamily } from "../../context/context";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function SelectPrioritesToMemberFamilyComponent({ data, index }) {
  const { members, setMembers } = useFamily();
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [showReasonTips, setShowReasonTips] = useState([]);
  const windowSize = useWindowSize();

  const { text, stepper } = data;

  const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;
  const DESKTOP_SMALL_SIZE = 1023;

  const handleToggleMember = (memberId) => {
    setMemberSelected((prevMemberSelected) => {
      const isSelected = !prevMemberSelected[memberId];
      return {
        ...prevMemberSelected,
        [memberId]: isSelected,
      };
    });

    setMembers((prevMembers) => {
      return prevMembers.map((member) => {
        if (member.id === memberId) {
          // Verificar se o valor já existe no array mediaBalance do membro
          const section = member[stepper].includes(text[index])
            ? member[stepper].filter((value) => value !== text[index])
            : [...member[stepper], text[index]];
          console.log(section);

          if (section) setSelectedButtons(true);

          if (!section) setSelectedButtons(false);
          // Atualizar a propriedade mediaBalance do membro encontrado
          return {
            ...member,
            [stepper]: section,
          };
        }

        return member;
      });
    });

    if (!selectedButtons.includes(memberId)) {
    }

    setSelectedButtons([...selectedButtons, memberId]);

    if (selectedButtons.includes(memberId))
      setSelectedButtons(selectedButtons.filter((id) => id !== memberId));
  };

  const [memberSelected, setMemberSelected] = useState({});

  const handleReasonTips = () => {  
    setShowReasonTips((prev) => !prev);
  };

  useEffect(() => {
    const initialMemberSelected = {};
    members.map((member) => {
      console.log(member[stepper]);
      const isSelected = member[stepper].includes(text[index]);
      initialMemberSelected[member.id] = isSelected;
    });

    setMemberSelected(initialMemberSelected);
  }, [members, text, index]);

  useEffect(() => {}, [showReasonTips]);

  return (
    <Box>
      <Box
        display={isMobile(windowSize) ? "grid" : "flex"}
        justifyContent={isMobile(windowSize) ? "center" : "space-between"}
        backgroundColor="#ffffff"
        border={1}
        borderRadius={1}
        padding={2}
        gap={4}
      >
        <Box >
          <Stack 
          
          direction="row">
            <SelfImprovementIcon fontSize="large" color="success" />
            <Stack >
              <Box width={isMobile(windowSize) ? "" : "80%"}>
                <Typography sx={{fontSize:'16px'}}> {text[index]} </Typography>
              </Box>
              <Box>
                <Button variant="outlined" onClick={handleReasonTips}>
                  {showReasonTips ? "Reason / Tips " : "Close "}
                </Button>
                <Button variant="outlined"> UnselectAll </Button>
              </Box>
            </Stack>
          </Stack>
        </Box>

        <Box >
          <Stack 
          spacing={{ xs: 1, sm: 2}} direction="row" useFlexGap flexWrap="wrap"
          display={isMobile(windowSize) ? "flex" : ""}
          justifyContent={isMobile(windowSize) ? "center" : ""}
          container gap={2} >
            {members.map((member, index) => (
              <Box  key={index}>
                <ToggleButton
                  selected={memberSelected[member.id]}
                  onChange={() => handleToggleMember(member.id)}
                  sx={{ textTransform: "none", minWidth: "10rem" }}
                >
                  <Stack gap={1} direction="row" height={42}>
                    <Stack>
                      <Box
                        borderRadius={"16rem"}
                        border={1}
                        component="img"
                        sx={{
                          height: 48,
                          width: 48,
                          padding: 1,
                        }}
                        alt="The house from the offer."
                        src="https://www.pngmart.com/files/5/Poro-PNG-Image.png"
                      />
                    </Stack>

                    <Stack>
                      <Typography variant="h6">
                        {member.nameMember ? member.nameMember : ""}
                      </Typography>
                      <Typography
                        variant="h9"
                        display="flex"
                        justifyContent="start"
                      >
                        {member.age ? member.age : ""}
                      </Typography>
                    </Stack>
                  </Stack>
                </ToggleButton>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
      <Box
        display={showReasonTips ? "none" : "flex"}
        sx={{ background: "#8fbde3" }}
        border={1}
      >
        <Box 
        display={isMobile(windowSize) ? "block" : "flex"}>
        <Box sx={{ padding: "2rem" }}>
          <Typography variant="h5"> Why?</Typography>
          <Typography>
            ​Online communication is a basic part of most kids' ​​​social lives.
            When sharing information online, it can be easier to express anger
            or cruelty towards others since they are not physically with you.​
            This situation goes by many names, such as cyberbullying, online
            harassment and exclusion. ​Whatever you call it, cruelty online has
            the same harmful effects as cruelty in person.
          </Typography>
        </Box>
        <Box sx={{ padding: "2rem" }}>
          <Typography variant="h5"> How?</Typography>
          <Typography>
            Teach your kids to take a deep breath and recognize when they are
            texting or posting out of strong emotions. This will give them a
            chance to rethink that decision. Tell them, "Before you say
            something in a text or online, take a moment to think: would I say
            this to someone in front of me?" ​ In your conversations about
            media, talk about "toxic" comments, text threads or conversations
            you saw online. Ask your kids how they think the situation could
            have been resolved more positively.​​​
          </Typography>
        </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SelectPrioritesToMemberFamilyComponent;
