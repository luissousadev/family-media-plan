import { styled } from "@mui/material/styles";

export const DeleteButton = styled("div")(() => ({
  width: 28,
  height: 28,
  position: "absolute",
  top: 5,
  right: 5,
  "@media (min-width: 1024px)": {
    display: "none",
  },
}));


export const DeleteButtonDesktop = styled("div")(() => ({
 display: "none",
  "@media (min-width: 1024px)": {
    display: "contents",
  },
}));
