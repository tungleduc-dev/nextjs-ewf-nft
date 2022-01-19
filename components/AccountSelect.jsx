import * as React from "react";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  buttonRoot: {
    backgroundColor: "#FFFFFF",
    border: '1px solid #DFDFE0',
    borderRadius: '30px',
    paddingLeft: '5px',
    color: '#33373B',
    boxShadow: "none",
    textTransform: 'capitalize',
    fontSize: '14px',
    lineHeight: '19px',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: "#FFFFFF",
      boxShadow: "none"
    }
  },
  endIcon: {
    fontSize: '27px',
    color: '#C4C4C4'
  },
  accountName: {
    marginLeft: '8px'
  }
});

const AccountSelect = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        endIcon={<ArrowDropDownIcon />}
        classes={{root: classes.buttonRoot, endIcon: classes.endIcon}}
      >
        <Image
          src="/assets/images/account_profile.png"
          width={26}
          height={26}
        />
        <Typography classes={{root: classes.accountName}}>Johndoe.near</Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default AccountSelect;
