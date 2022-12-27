import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CardWidget from '../CardWidget/CardWidget';


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Prueba
          </Typography>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">Viajes</Button>
          <CardWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar