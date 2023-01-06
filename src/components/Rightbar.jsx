import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import friend1 from '../static/images/Friend1.jpg';
import friend2 from '../static/images/Friend2.jpg';
import friend3 from '../static/images/Friend3.jpg';
import friend5 from '../static/images/Friend5.jpg';
import friend6 from '../static/images/Friend6.jpg';
import friend7 from '../static/images/Friend7.jpg';
import friend8 from '../static/images/Friend8.jpg';
import friend9 from '../static/images/Friend9.jpg';
import lastPhoto1 from '../static/images/LastPhoto1.jpg';
import lastPhoto2 from '../static/images/LastPhoto2.jpg';
import lastPhoto3 from '../static/images/LastPhoto3.jpg';
import rightPhoto1 from '../static/images/RightPhoto1.jpg';
import rightPhoto2 from '../static/images/RightPhoto2.jpg';
import rightPhoto3 from '../static/images/RightPhoto3.jpg';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
        <Avatar
            alt="Monica Geller"
            src={friend1}
          />
          <Avatar
            alt="Chandler Bing"
            src={friend2}
          />
          <Avatar
            alt="Rachel Green"
            src={friend3}
          />
          <Avatar alt="Somebody" src="" />
          <Avatar
            alt="Joseph Tribbiani"
            src={friend5}
          />
          <Avatar
            alt="Ross Geller"
            src={friend6}
          />
          <Avatar
            alt="Phoebe Buffay"
            src={friend7}
          />
          <Avatar
            alt="Mike Hannigan"
            src={friend8}
          />
          <Avatar
            alt="Janice Litman-Goralnik"
            src={friend9}
          />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src={lastPhoto1}
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={lastPhoto2}
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={lastPhoto3}
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp"
                src={rightPhoto1}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
              <Avatar alt="Travis Howard"
                src={rightPhoto2}
              />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
              <Avatar alt="Cindy Baker"
                src={rightPhoto3}
              />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar
