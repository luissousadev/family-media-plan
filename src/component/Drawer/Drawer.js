import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

function DrawerComponent({ drawerToggle, navItems }) {

    const handleLanguage = () => {
        console.log("funcionou")
    }

    return (

        <Box onClick={drawerToggle} sx={{ textAlign: 'center' }}>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}

                <Button onClick={handleLanguage()} variant="text">En Espanol</Button>
            </List>
        </Box>
    )
}

export default DrawerComponent;