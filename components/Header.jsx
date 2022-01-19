import * as React from "react";
import { makeStyles } from '@mui/styles';
import Link from "next/link";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import AccountSelect from "./AccountSelect";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const useStyles = makeStyles({
  root: {
    backgroundColor: '#F5F5F5',
    height: '71px',
    boxShadow: 'none'
  },
  toolbarRoot: {
    height: '100%'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 10
  },
  settingsGroup: {
    position: 'absolute',
    right: 0
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" classes={{root: classes.root}}>
        <Toolbar classes={{root: classes.toolbarRoot}}>
          <Container
            maxWidth="lg"
            sx={{ display: `flex`, justifyContent: `center`, padding: '0px', position: 'relative' }}
          >
            <Link href="/">
              <a className={classes.logo}>
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={20.1}
                  height={22}
                />
              </a>
            </Link>
            <AccountSelect />
            <Stack className={classes.settingsGroup} direction="row">
              <IconButton aria-label="notifications">
                <Image
                  src="/assets/icons/notification.png"
                  alt="logo"
                  width={26}
                  height={26}
                />
              </IconButton>
              <IconButton aria-label="settings">
                <Image
                  src="/assets/icons/settings.png"
                  alt="logo"
                  width={26}
                  height={26}
                />
              </IconButton>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Header;
