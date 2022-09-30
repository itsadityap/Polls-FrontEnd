import Box from "@mui/material/Box";
import {AppBar, Toolbar, Typography} from "@mui/material";

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }} minWidth='100%'   >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Polls For WhatsApp
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;