import * as React from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { SmallAvatar } from "./styles";

export function AvatarWithBadge({
  url,
  onSmallBadgeClick,
  badgeContent = () => (
    <SmallAvatar alt="Remy Sharp" src={url} onClick={onSmallBadgeClick} />
  ),
}) {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={badgeContent()}
    >
      <Avatar alt="Travis Howard" src={url} />
    </Badge>
  );
}
