import * as React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const useStyles = makeStyles({
  transactionTabsContainer: {
    maxWidth: '280px',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    "& .MuiTab-root": {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '18px',
      color: '#6F6E73',
      textTransform: 'capitalize',
      paddingTop: '6px',
      paddingBottom: '6px',
      paddingLeft: '10px',
      paddingRight: '10px',
      marginLeft: '10px',
      marginRight: '10px',
      minHeight: 'auto',
      minWidth: 'auto',
      "&.Mui-selected": {
        background: '#FCFCFC',
        border: '1px solid #BEBEC2',
        borderRadius: '10px',
        color: "#414047",
      },
    },
    '& .MuiTabs-indicator': {
      display: 'none'
    }
  },
  avatarRoot: {
    background: "#F5F5F5",
  },
  listItemPrimaryText: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "19px",
  },
  transactionDate: {
    fontSize: "13px",
    lineHeight: "18px",
    color: "#808080",
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

const Transactions = () => {
  const classes = useStyles();
  const [tabvalue, setTabValue] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <>
      <Box className={classes.transactionTabsContainer} sx={{ maxWidth: 480, bgcolor: "background.paper" }}>
        <Tabs
          value={tabvalue}
          onChange={handleChangeTab}
          
          aria-label="transactions tabs"
        >
          <Tab label="All" />
          <Tab label="Sent" />
          <Tab label="Received" />
        </Tabs>
      </Box>
      <TabPanel value={tabvalue} index={0}>
        <List sx={{ width: "100%" }}>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar classes={{ root: classes.avatarRoot }}>
                <img src="/assets/icons/sent_icon.png" alt="Sent Icon" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              classes={{ primary: classes.listItemPrimaryText }}
              primary="0.456 NEAR"
              secondary={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>Sent to</Typography>
                  <Typography style={{ color: "#885FFF", marginLeft: "5px" }}>
                    devon.near
                  </Typography>
                </Box>
              }
            />
            <Typography classes={{ root: classes.transactionDate }}>
              3 days ago
            </Typography>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar classes={{ root: classes.avatarRoot }}>
                <img src="/assets/icons/receive_icon.png" alt="Sent Icon" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              classes={{ primary: classes.listItemPrimaryText }}
              primary="0.456 NEAR"
              secondary={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>Sent to</Typography>
                  <Typography style={{ color: "#885FFF", marginLeft: "5px" }}>
                    devon.near
                  </Typography>
                </Box>
              }
            />
            <Typography classes={{ root: classes.transactionDate }}>
              3 days ago
            </Typography>
          </ListItemButton>
        </List>
      </TabPanel>
      <TabPanel value={tabvalue} index={1}>
        <List sx={{ width: "100%" }}>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar classes={{ root: classes.avatarRoot }}>
                <img src="/assets/icons/sent_icon.png" alt="Sent Icon" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              classes={{ primary: classes.listItemPrimaryText }}
              primary="0.456 NEAR"
              secondary={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>Sent to</Typography>
                  <Typography style={{ color: "#885FFF", marginLeft: "5px" }}>
                    devon.near
                  </Typography>
                </Box>
              }
            />
            <Typography classes={{ root: classes.transactionDate }}>
              3 days ago
            </Typography>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar classes={{ root: classes.avatarRoot }}>
                <img src="/assets/icons/receive_icon.png" alt="Sent Icon" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              classes={{ primary: classes.listItemPrimaryText }}
              primary="0.456 NEAR"
              secondary={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>Sent to</Typography>
                  <Typography style={{ color: "#885FFF", marginLeft: "5px" }}>
                    devon.near
                  </Typography>
                </Box>
              }
            />
            <Typography classes={{ root: classes.transactionDate }}>
              3 days ago
            </Typography>
          </ListItemButton>
        </List>
      </TabPanel>
      <TabPanel value={tabvalue} index={2}>
        <List sx={{ width: "100%" }}>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar classes={{ root: classes.avatarRoot }}>
                <img src="/assets/icons/sent_icon.png" alt="Sent Icon" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              classes={{ primary: classes.listItemPrimaryText }}
              primary="0.456 NEAR"
              secondary={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>Sent to</Typography>
                  <Typography style={{ color: "#885FFF", marginLeft: "5px" }}>
                    devon.near
                  </Typography>
                </Box>
              }
            />
            <Typography classes={{ root: classes.transactionDate }}>
              3 days ago
            </Typography>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar classes={{ root: classes.avatarRoot }}>
                <img src="/assets/icons/receive_icon.png" alt="Sent Icon" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              classes={{ primary: classes.listItemPrimaryText }}
              primary="0.456 NEAR"
              secondary={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>Sent to</Typography>
                  <Typography style={{ color: "#885FFF", marginLeft: "5px" }}>
                    devon.near
                  </Typography>
                </Box>
              }
            />
            <Typography classes={{ root: classes.transactionDate }}>
              3 days ago
            </Typography>
          </ListItemButton>
        </List>
      </TabPanel>
    </>
  );
};

export default Transactions;
