import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { Stack } from "react-bootstrap";
import { Box } from "@mui/material";
import { useWindowSize } from "../../hooks/useWindowSize";
import { DeleteButton } from "./styles";
import ClearIcon from "@mui/icons-material/Clear";


const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const avatar = [
  "https://www.pngmart.com/files/5/Poro-PNG-Image.png",
  "https://www.pngmart.com/files/22/Nier-PNG-Pic.png",
  "https://www.pngmart.com/files/5/Poro-PNG-Image.png",
  "https://www.pngmart.com/files/22/Nier-PNG-Pic.png",
  "https://www.pngmart.com/files/5/Poro-PNG-Image.png",
  "https://www.pngmart.com/files/22/Nier-PNG-Pic.png",
  "https://www.pngmart.com/files/5/Poro-PNG-Image.png",
  "https://www.pngmart.com/files/22/Nier-PNG-Pic.png",
  "https://www.pngmart.com/files/5/Poro-PNG-Image.png",
  "https://www.pngmart.com/files/22/Nier-PNG-Pic.png",
  "https://www.pngmart.com/files/5/Poro-PNG-Image.png",
  "https://www.pngmart.com/files/22/Nier-PNG-Pic.png",
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  
  const handleListItemClick = (value) => {
    onClose(value);
  };

  const windowSize = useWindowSize();
  const DESKTOP_SMALL_SIZE = 1023;
  const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;

  return (

    <Dialog onClose={handleClose} open={open}>
    <Box 
    width={isMobile(windowSize) ? "21rem" : "30rem"}
    sx={{ border:'5px solid black'}}>
      <Box 
      padding={isMobile(windowSize) ? "2rem 0rem 2rem 1rem" : "2rem 1rem 3rem 2rem"}
      >
        <DeleteButton aria-label="delete" onClick={handleClose}>
          <ClearIcon color="error" fontSize="large" />
        </DeleteButton>
        <Typography sx={{fontSize:'35px'}}>Seleccione su avatar</Typography>
        <Typography width={isMobile(windowSize) ? "80%" : "100%"}>
          Personalice su personaje para hacer un plan que se adapte a sus
          necesidades
        </Typography>
      </Box>
      <Box sx={{paddingLeft: '2rem', background: "#FAFAEF"}}>
        <List sx={{ pt: 0 }}>
          {avatar.map((icone) => (
            <Button onClick={() => handleListItemClick(icone)} key={icone}>
              <Avatar sx={{ width: 112, height: 112 }} src={icone}></Avatar>
            </Button>
          ))}
        </List>
      </Box>
    </Box> 
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(avatar[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Stack direction="row">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <SmallAvatar
            alt="Remy Sharp"
            src="../../assents/edit.png"
            onClick={handleClickOpen}
          />
        }
      >
        <Avatar
          sx={{ width: 75, height: 75 }}
          alt="Travis Howard"
          src={selectedValue}
        />
      </Badge>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Stack>
  );
}
