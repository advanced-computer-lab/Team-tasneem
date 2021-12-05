// This an example on using an external framework on top of react

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Snackbar from '@mui/material/Snackbar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Alert from '@mui/material/Alert';

import { useState } from 'react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function UserCard({user}) {
  const [expanded, setExpanded] = useState(false);
  const [like, setLike] = useState(false);
  const [snackOpen,setSnackOpen] = useState(false);
  const [snackOpenError,setSnackOpenError] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleLike = () => {
    if (!like){
        setSnackOpen(true);
    }else{
        setSnackOpenError(true)
    }
    setLike(!like);
    
  };

  const handleClose = () => {
    setSnackOpen(false);
    setSnackOpenError(false);
  };

  return (
    <Card sx={{ maxWidth: 300  }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user.Name.length >0? user.Name[0].toUpperCase():"N"}
          </Avatar>
        }
        title={user.Email}
        subheader={user.PhoneNumber}
      />
      <CardMedia
        component="img"
        height="194"
        image= "https://ichef.bbci.co.uk/news/976/cpsprodpb/A902/production/_119466234_gettyimages-1250425362.jpg"
        alt="Loading..."
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Hello This is {user.Name}. Hope you enjoy visiting my profile.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        {like ? <FavoriteIcon onClick={handleLike}/>:<FavoriteBorderOutlinedIcon onClick={handleLike} />}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>This is More info about me</Typography>
          <Typography paragraph>
            I was born in {user.BornIn} which i really like. But i'm currently living in {user.LivesIn}
          </Typography>
          <Typography>
            Thank you for visiting.
          </Typography>
        </CardContent>
      </Collapse>
      <Snackbar open={snackOpen} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Thank you for following me. Sincerely {user.Name}
        </Alert>
      </Snackbar>

      <Snackbar open={snackOpenError} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Sad ! i will unfollow you xD
        </Alert>
      </Snackbar>
    </Card>
  );
}
export default UserCard;