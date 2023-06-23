import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import {
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  ToggleButton,
  Typography,
} from "@mui/material";

export const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export const StyleButtonLeft = styled(Button)(({ theme }) => ({
  position: "sticky",
  top: 50,
  height: "96px",
  width: "150px",
  borderRadius: "150px 150px 0 0",
  backgroundColor: "#1976d2",
  msTransform: "rotate(-90deg)",
  webkitTransform: "rotate(-90deg)",
  transform: "rotate(-90deg) translateY(35px) translateX(-180px)",
}));

export const StyleBoxMobileButton = styled(Box)(({ theme }) => ({
  display: "none",
  "@media (min-width: 1024px)": {
    display: "flex",
  },
}));

export const StyleBoxMobile = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "1rem 0rem 0rem 0rem",
  "@media (min-width: 1024px)": {
    display: "none",
  },
}));

export const StyleTypographyLeft = styled(Typography)(({ theme }) => ({
  transform: "rotate(90deg)",
}));

export const StyleButtonRight = styled(Button)(({ theme, disabled }) => ({
  position: "sticky",
  top: 50,
  height: "96px",
  width: "150px",
  borderRadius: "150px 150px 0 0",
  msTransform: "rotate(90deg)",
  webkitTransform: "rotate(90deg)",
  transform: "rotate(90deg) translateY(27px) translateX(180px)",
  backgroundColor: disabled ? "transparent" : "#1976d2",
}));

export const StyleButtonHome = styled(Button)(({ theme }) => ({
  position: "flex",
  right: "24.3%",
  top: "17rem",
  height: "96px",
  width: "150px",
  borderRadius: "150px 150px 0 0",
  backgroundColor: "#1976d2",
  msTransform: "rotate(90deg)",
  webkitTransform: "rotate(90deg)",
  transform: "rotate(90deg) translateY(-9px) translateX(10px)",
}));

export const StyleTypographyRight = styled(Typography)(({ theme }) => ({
  display: "grid",
  transform: "rotate(-90deg)",
  color: "white",
}));

export const StyleIconButton = styled(IconButton)(({ theme }) => ({
  "@media (min-width: 1024px)": {
    display: "none",
  },
}));

export const StyleGrid = styled(Grid)(({ theme }) => ({
  "@media (min-width: 1024px)": {
    width: "40rem",
  },
}));

export const StyleToggleButton = styled(ToggleButton)(({ theme }) => ({
  padding: "0.2rem",
  "@media (min-width: 1024px)": {
    padding: "1.5rem",
  },
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
