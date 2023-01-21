import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Checkbox, FormControlLabel, FormGroup, Link, TextField } from '@mui/material';

const rightcol = () => {
  return (
    <Card sx={{ borderRadius: 12  }}>
      <CardContent>
        <Typography variant='h4' component="h3" gutterBottom textAlign={'center'}>
          Login
        </Typography>
        <Box component='form' noValidate autoComplete="off" display={'block'} sx={{
        '& .MuiTextField-root': { my: 1 },
      }}>
        <TextField
          id="username"
          label="Username"
          fullWidth 
        />
        <TextField
          id="password"
          label="Password"
          fullWidth
        />
        </Box>
        <Box display='flex' justifyContent='space-between' alignItems='center' marginY={2}  >
        <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
        </FormGroup>
        <Link underline='none' href="#">Forget Password</Link>
        </Box>
        <Button variant="contained" sx={{ borderRadius: 64}}fullWidth onSubmit={e => console.log(e)} size="medium">
        <Typography variant="body" marginY={2}>Login In</Typography>
        </Button>
        <Box alignItems="right" display='-ms-inline-flexbox' >
        <Typography paragraph textAlign={'center'} marginY={2}>
            Dont Have an Account?
        <Link underline='none' href="#"> Create Account</Link>
        </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default rightcol