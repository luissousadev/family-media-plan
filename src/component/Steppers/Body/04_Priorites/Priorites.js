import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import CheckBoxPriorites from "../../../CheckBoxPriorites/CheckBoxPrioritesComponent";
import { useFamily } from "../../../../context/context";
import { StyleGrid } from "../../../AvatarWithBadge/styles";
import { useEffect, useState } from "react";

function Priorities() {
  const { family, members, setFamily, setLocalStorage } = useFamily();
  const [hasFalseValue, setHasFalseValue] = useState(true);


  const handleSelect = (prop, value) => {
    setFamily((prevFamily) => ({
      ...prevFamily,
      [prop]: value,
    }));
    console.log(family);
  };

  const setDataLocalStorage = (data) => {    
    let familyData = {};
    if (data) {
      familyData = { ...family, familyMembers: [...members] };
      setLocalStorage(familyData);
    }
  };

  const checkFalseValue = (object) => {    
    const hasFalseValue = Object.values(object).some(
      (value) => value === false
    );
    return hasFalseValue;
  };

  const handleUnselectAll = () => {
    console.log("Dei um salve aqui");

    const hasFalseValue = checkFalseValue(family);
    console.log(hasFalseValue);
    const updatedFamily = { ...family };

    if (!hasFalseValue) {
      for (const prop in updatedFamily) {
        if (typeof updatedFamily[prop] === "boolean") {
          updatedFamily[prop] = false;
        }
      }
    }

    if (hasFalseValue) {
      for (const prop in updatedFamily) {
        if (typeof updatedFamily[prop] === "boolean") {
          updatedFamily[prop] = true;
        }
      }
    }

    setFamily(updatedFamily);
  };

  useEffect(() => {
    const hasFalseValue = checkFalseValue(family);
    console.log(members)
    setHasFalseValue(hasFalseValue);
  }, [family]);

  useEffect(() => {
    setDataLocalStorage(family);
  }, []);

  return (
    <Box>
      <Box>
        <Button onClick={handleUnselectAll}>
          {" "}
          {hasFalseValue ? "Select All" : "Unselect All"}{" "}
        </Button>
        <Divider variant="middle" />
        <Box>
          <Grid container gap={8}>
            <StyleGrid item>
              <CheckBoxPriorites
                isChecked={family.hasMediaBalance}
                onSelect={(value) => handleSelect("hasMediaBalance", value)}
                title="Media Balance"
                text="Whether at home, school or work, we are surrounded by media and digital devices. At the same time, we know that face-to-face time with family, friends and teachers is important to a child’s learning and healthy development."
              />
            </StyleGrid>
            <StyleGrid item>
              <CheckBoxPriorites
                isChecked={family.hasCommunicatingAboutMedia}
                onSelect={(value) =>
                  handleSelect("hasCommunicatingAboutMedia", value)
                }
                title="Communicating About Media"
                text="​Media shouldn’t be a taboo topic. It’s all around us, so we have to talk​ about it. The more you discuss it as part of your daily routine — in the car, dinner table or at a regular "
              />
            </StyleGrid>
            <StyleGrid item>
              <CheckBoxPriorites
                isChecked={family.hasKindnessEmpathy}
                onSelect={(value) => handleSelect("hasKindnessEmpathy", value)}
                title="Kindness & Empathy"
                text="​Having family expectations about being kind and understanding of others — both online and off — is key to healthy, respectful relationships and positive media use. "
              />
            </StyleGrid>
            <StyleGrid item>
              <CheckBoxPriorites
                isChecked={family.hasDigitalPrivacySafety}
                onSelect={(value) =>
                  handleSelect("hasDigitalPrivacySafety", value)
                }
                title="Digital Privacy & Safety"
                text="​The internet is still a bit like the Wild West. Certainly, it is not always designed with kids in mind. Talking about digital safety rules can help your child navigate the digital landscape. You can also use a combination of tools: privacy settings, reporting and flagging inappropriate content and ongoing conversations about online behavior. ​"
              />
            </StyleGrid>
            <StyleGrid item>
              <CheckBoxPriorites
                isChecked={family.hasScreenFreeZones}
                onSelect={(value) => handleSelect("hasScreenFreeZones", value)}
                title="Screen Free Zones"
                text="​Having areas of your home remain screen-free benefits a child's health and development in many ways. A big part of this is understanding and agreeing as a family where screens are not allowed."
              />
            </StyleGrid>
            <StyleGrid item>
              <CheckBoxPriorites
                isChecked={family.hasScreenFreeTimes}
                onSelect={(value) => handleSelect("hasScreenFreeTimes", value)}
                title="Screen Free Times"
                text="​Screens don't have to be in every moment and every space of our day, trying to grab everyone's attention. Carving out time for family conversations and play is really important for your child’s health and development. "
              />
            </StyleGrid>
            <StyleGrid item>
              <CheckBoxPriorites
                isChecked={family.hasChosingGoodContent}
                onSelect={(value) =>
                  handleSelect("hasChosingGoodContent", value)
                }
                title="Choosing Good Content"
                text="​​​​​There are millions of shows, apps and video games​ trying to get your family’s attention. Finding content that is a good fit with your family can take work. However, it’s worth it to find media that gives your child creative experiences, positive role models and true enjoyment.​"
              />
            </StyleGrid>
            <StyleGrid item>
              <CheckBoxPriorites
                isChecked={family.hasUsingMediaTogether}
                onSelect={(value) =>
                  handleSelect("hasUsingMediaTogether", value)
                }
                title="Using Media Together"
                text="Not all screen time is created equal. Enjoying movie night, watching an educational video or exploring a learning app together, for example, turns screen time into family time. Using digital media together can build bonds, promote learning and show your child that you care about what matters to them. ​"
              />
            </StyleGrid>
          </Grid>
        </Box>
        <Divider variant="middle" />
        <Box marginTop={5}>
          <Typography variant="h5">
            Tip: Select just a few priorities to start. You can come back and
            add more goals to try later. Choosing priorities that motivate you
            the most can make it easier to stick with a Family Media Plan.
            Involving your kids in the choices may also help.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Priorities;
