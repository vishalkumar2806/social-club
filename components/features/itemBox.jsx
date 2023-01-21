import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@mui/system';




const Itembox  = ({ title , desc , icon }) => {
  return (
    <Card sx={{ maxWidth: 345 , height: '100%'}} >
      <CardContent>
        <Box sx={{ backgroundColor: '#FF77D9' , display: 'flex'}} padding={2} marginBottom={2} borderRadius={2} justifyContent='center'>
            <FontAwesomeIcon icon={icon} size='4x' color='white'/>
        </Box>
        <Typography gutterBottom variant="h5" component="div" textAlign='center'>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}





export default Itembox