import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";

import Collectibles from "@components/Collectibles";
import Transactions from "@components/Transactions";

const useStyles = makeStyles({
  containerRoot: {
    marginTop: "15px",
  },
  gridRoot: {
    marginTop: "0px",
    marginBottom: "10px",
  },
  contactsCard: {
    minHeight: "99px",
    background: "#EAEFFF",
    borderRadius: "6px",
    boxShadow: "none",
  },
  webAppsCard: {
    position: "relative",
    minHeight: "99px",
    background: "#885FFF",
    borderRadius: "6px",
    boxShadow: "none",
  },
  nftCreatCard: {
    background: "#F7E9FF",
    borderRadius: "10px",
    boxShadow: "none",
    "& .MuiTypography-root": {
      fontSize: "22px",
      lineHeight: "30px",
      fontWeight: 600,
      color: "#414047",
      maxWidth: "137px",
    },
    "& .MuiButton-contained": {
      background: "#885FFF",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "22px",
      textTransform: "capitalize",
      borderRadius: "10px",
      paddingRight: "8px",
      marginTop: "15px",
    },
  },
  cardContent: {
    padding: "12px",
    paddingBottom: "15px !important",
  },
  cardTitle: {
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: 600,
  },
  badge: {
    background: "#18D7A9",
    color: "#FFFFFF",
    fontSize: "12px",
    fontWeight: 500,
    borderRadius: "6px",
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingLeft: "7px",
    paddingRight: "7px",
  },
  tabs: {
    "& .MuiTab-root": {
      "&.Mui-selected": {
        color: "#33373B",
      },
    },
    "& .MuiTabs-indicator": {
      background: "#33373B",
      height: "3px",
    },
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const classes = useStyles();
  const [tabvalue, setTabValue] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Container maxWidth="sm" classes={{ root: classes.containerRoot }}>
        <Grid container spacing={2} classes={{ root: classes.gridRoot }}>
          <Grid item xs={6}>
            <Card className={classes.contactsCard}>
              <CardContent classes={{ root: classes.cardContent }}>
                <Box
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  mb={1}
                >
                  <Typography
                    classes={{ root: classes.cardTitle }}
                    style={{ color: "#414047" }}
                  >
                    Contacts
                  </Typography>
                  <ChevronRightIcon style={{ color: "#6F6E73" }} />
                </Box>
                <Box>
                  <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/assets/images/avatar.jpg" />
                    <Avatar
                      alt="Travis Howard"
                      src="/assets/images/avatar.jpg"
                    />
                    <Avatar alt="Cindy Baker" src="/assets/images/avatar.jpg" />
                    <Avatar
                      alt="Agnes Walker"
                      src="/assets/images/avatar.jpg"
                    />
                    <Avatar
                      alt="Trevor Henderson"
                      src="/assets/images/avatar.jpg"
                    />
                  </AvatarGroup>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.webAppsCard}>
              <CardContent classes={{ root: classes.cardContent }}>
                <Box
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  mb={1}
                >
                  <Typography
                    classes={{ root: classes.cardTitle }}
                    style={{ color: "#FFFFFF" }}
                  >
                    web3 Apps
                  </Typography>
                  <ChevronRightIcon style={{ color: "#FFFFFF" }} />
                </Box>
                <Box component="span" className={classes.badge}>
                  12 Connected
                </Box>
                <img
                  style={{ position: "absolute", right: 0, bottom: 0 }}
                  src="/assets/images/webapps_background.png"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container classes={{ root: classes.gridRoot }}>
          <Grid item xs={12}>
            <Card className={classes.nftCreatCard}>
              <CardContent classes={{ root: classes.cardContent }}>
                <Box sx={{ position: "relative" }}>
                  <Typography>Start Creating your NFT Today</Typography>
                  <Button
                    variant="contained"
                    endIcon={<ChevronRightIcon style={{ color: "#FFFFFF" }} />}
                  >
                    Create NFT
                  </Button>
                  <img
                    style={{
                      position: "absolute",
                      right: "-12px",
                      top: "-12px",
                    }}
                    src="/assets/images/nft_background.png"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            className={classes.tabs}
            value={tabvalue}
            onChange={handleChangeTab}
            aria-label="home page tabs"
            variant="fullWidth"
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Collectibles" {...a11yProps(0)} />
            <Tab label="Transactions" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={tabvalue} index={0}>
          <Collectibles />
        </TabPanel>
        <TabPanel value={tabvalue} index={1}>
          <Transactions />
        </TabPanel>
      </Box>
    </>
  );
}
