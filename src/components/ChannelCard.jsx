
import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channelDetail}) => {
  return(
  <Box
  sx={{
    boxShadow: 'none',
    borderRadius: '20px'
  }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: 'white' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
      </CardContent>
    <Typography
    variant='h6'
    >
      {channelDetail?.snippet?.title}

    </Typography>
    {channelDetail?.statistics?.subsriberCount && (
      <Typography>
        {parseInt(channelDetail?.statstics?.subsriberCount).toLocaleString()}
      </Typography>
    )} 
    </Link>
  </Box>
  )

}

export default ChannelCard