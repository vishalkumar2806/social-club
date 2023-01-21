import { Card, CardContent,  Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import * as React from 'react';

import makeStyle from '../styles/content';
import { Box } from '@mui/system';
var features = [ 'FASTEST DELIVERY'
  ,'SAFE & SECURE'
  ,'GUARANTEED SERVICES'
  ,'100% SATISFACTION'
  ,'24 - HOUR SUPPORT'
  ,'MONEY BACK GUARANTEE'
  ,'API FOR RESELLERS'
  ]

export default function MediaCard() {
  const classes = makeStyle()
  return (
      <Card sx={{marginRight: 3 , borderTopLeftRadius: 64 , borderTopRightRadius : 64 , paddingX: 5 }} elevation={3}>
        <CardContent>
        <Typography variant="h1" padding={3} className={classes.mainText}  textAlign={'left'}>
          Gain Instagram Followers
        </Typography>
        <Typography variant="h3" textAlign={'left'}>
        BEST AND CHEAPEST SMM PANEL SERVICES FOR RESELLERS
        </Typography>
        <Typography variant="h4" textAlign={'left'}>
        Fully Automated Best and Cheapest Bulk SMM Panel. Do you Want to earn money? 
        Bring friends and Earn up to 10% of their Spent For Life. Try Now!
        </Typography>
        <Box paddingX={12} paddingY={3} >
        {features.map( (list,index) => { 
          return(
            <Typography key={index} variant="h4" alignItems={'center'} > 
          <CircleIcon />{' '}{list }
          </Typography>
            )
        })}
        </Box>
        <Typography variant="body1"  textAlign={'left'}>
        Best and Cheapest SMM Panel For TikTok Followers, Instagram Likes, YouTube Views, 
        Facebook Fans, Twitter Retweets, Telegram Subscribers, and Many SMM Services Instantly.
        </Typography>
        </CardContent>
      </Card>
  );
}

