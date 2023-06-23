import {
  Box,
  Stack,
  TextField,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { DeleteButton, DeleteButtonDesktop } from "./styles";
import FamilyMember from "../../entities/familyMember";
import { useFamily } from "../../context/context";
import { StyleToggleButton } from "../AvatarWithBadge/styles";
import ClearIcon from "@mui/icons-material/Clear";
import SimpleDialog from "./ModalAvatarFamile";
import PropTypes from "prop-types";

function FamiliyMemberComponent({ onDelete, currentMember, id, props }) {
  const { setMembers, members, hasThisFamilyMember, family, setValidation } =
    useFamily();
  const [familyMember, setFamilyMember] = useState({ nameMember: "", age: "" });
 

  const getDataMembers = () => {
    const currentMember = members.find((member) => member.id === id);
    if (currentMember) {
      setFamilyMember(currentMember);
    }
  };

  const windowSize = useWindowSize();

  const DESKTOP_SMALL_SIZE = 1023;
  const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;

  const handleDataMemberChange = (field, value) => {
    setFamilyMember((prevMember) => ({ ...prevMember, [field]: value }));
  };

  const addFamilyMember = () => {
    const hasId = hasThisFamilyMember(id);

    let newMember;

    if (members.length > 0) {
      newMember = new FamilyMember(
        currentMember.id,
        familyMember.nameMember,
        familyMember.age
      );
    }

    if (!hasId) {
      const updatedMembers = [...members, newMember];
      setMembers(updatedMembers);
      return;
    }

    let updatedMembers = members.map((member) => {      
      if (member.id == id && member !== newMember) {
        return { ...member, ...newMember };
      }
      return member;
    });
    setMembers(updatedMembers);
  };

  const avatar = [];
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(avatar[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

 

  useEffect(() => {
    if (family.age !== "") addFamilyMember();
  }, [familyMember.age]);

  useEffect(() => {
    getDataMembers();
  }, []);

  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };
  return (
    <Box
      display="flex"
      justifyContent = 'space-between'
      flexDirection={isMobile(windowSize) ? "column" : "row"}
      alignItems={isMobile(windowSize) ? "flex-start" : "center"}
      sx={{ backgroundColor: "#ffffff", position: "relative" }}
      border={1}
      borderRadius={1}
      padding={1}
      gap={2}
    >
      <Stack
        width={isMobile(windowSize) ? "100%" : "49%"}
        sx={{ marginTop: "12px" }}
        direction="row"
        alignItems="center"
        gap={4}
      >
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />

        <Box sx={{ marginTop: "12px" }}>
          <TextField
            id="name-member-input"
            value={familyMember.nameMember}
            onBlur={addFamilyMember}
            onChange={(e) =>
              handleDataMemberChange("nameMember", e.currentTarget?.value)
            }
            label="Family Member's Name"
          />
        </Box>
      </Stack>

      <DeleteButton aria-label="delete" onClick={onDelete}>
        <ClearIcon color="error" fontSize="large" />
      </DeleteButton>

      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography>Age</Typography>
          <ToggleButtonGroup
            sx={{ height: "3.5rem" }}
            exclusive
            value={familyMember.age}
            onChange={(_, value) => handleDataMemberChange("age", value)}
          >
            <StyleToggleButton value="0-24"> 0-24 months</StyleToggleButton>
            <StyleToggleButton value="2-3"> 2-3 years</StyleToggleButton>
            <StyleToggleButton value="6-12"> 6-12 yearss</StyleToggleButton>
            <StyleToggleButton value="13-18"> 13-18 years</StyleToggleButton>
            <StyleToggleButton value="adult"> Adult </StyleToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box sx={{ marginTop: "2rem" }}>
          <DeleteButtonDesktop
            flexDirection={isMobile(windowSize) ? "column" : "row"}
            aria-label="delete"
            onClick={onDelete}
          >
            <ClearIcon color="error" fontSize="large" />
          </DeleteButtonDesktop>
        </Box>
      </Box>
    </Box>
  );
}

export default FamiliyMemberComponent;
