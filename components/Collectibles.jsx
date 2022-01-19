import * as React from "react";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  listItemButton: {
    paddingRight: "25px",
  },
  avatarContainer: {
    "& img": {
      borderRadius: "10px",
    },
  },
  listItemPrimaryText: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '19px',
    color: '#000000'
  }
});

const Collectibles = () => {
  const classes = useStyles();

  return (
    <>
      <List sx={{ width: "100%" }}>
        <ListItemButton classes={{ root: classes.listItemButton }}>
          <ListItemAvatar>
            <Box className={classes.avatarContainer} mr={2}>
              <Image src="/assets/images/avatar.jpg" width={60} height={60} />
            </Box>
          </ListItemAvatar>
          <ListItemText
            classes={{primary: classes.listItemPrimaryText}}
            primary="Photos"
            secondary={
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                by <Typography style={{color: '#885FFF', marginLeft: '5px'}}>johndoe.near</Typography>
              </Box>
            }
          />
          <ChevronRightIcon style={{ color: "#6F6E73", fontSize: "28px" }} />
        </ListItemButton>
        <ListItemButton classes={{ root: classes.listItemButton }}>
          <ListItemAvatar>
            <Box className={classes.avatarContainer} mr={2}>
              <Image src="/assets/images/avatar.jpg" width={60} height={60} />
            </Box>
          </ListItemAvatar>
          <ListItemText
            classes={{primary: classes.listItemPrimaryText}}
            primary="Photos"
            secondary={
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                by <Typography style={{color: '#885FFF', marginLeft: '5px'}}>johndoe.near</Typography>
              </Box>
            }
          />
          <ChevronRightIcon style={{ color: "#6F6E73", fontSize: "28px" }} />
        </ListItemButton>
        <ListItemButton classes={{ root: classes.listItemButton }}>
          <ListItemAvatar>
            <Box className={classes.avatarContainer} mr={2}>
              <Image src="/assets/images/avatar.jpg" width={60} height={60} />
            </Box>
          </ListItemAvatar>
          <ListItemText
            classes={{primary: classes.listItemPrimaryText}}
            primary="Photos"
            secondary={
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Typography>by </Typography>
                <Typography style={{color: '#885FFF'}}>johndoe.near</Typography>
              </Box>
            }
          />
          <ChevronRightIcon style={{ color: "#6F6E73", fontSize: "28px" }} />
        </ListItemButton>
      </List>
    </>
  );
};

export default Collectibles;
