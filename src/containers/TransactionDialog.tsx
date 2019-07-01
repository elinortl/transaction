import * as React from 'react';
import './style.css';
import { withStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import NestedList from '../components/NestedList';
import Button from '@material-ui/core/Button';

const styles = (theme: Theme) =>
  createStyles({
    topheader: {
      width: '100%',
      margin: 0,
      padding: 0
    },
    appbar: {
      alignItems: 'center'
    },
    button: {
      backgroundColor: theme.palette.primary.dark,
      color: 'white',
      // marginBottom: 20,
      width: '90%',
      marginBottom: 20,
      position: 'absolute',
      alignSelf: 'center',
      bottom: 0
    },
    paper: {
      flexDirection: 'column',
      display: 'flex',
      height: '60%',
      width: '70%',
      flex: 1,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: 'none',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'auto'
    },
    close: {
      position: 'absolute',
      right: 20,
      top: 10
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  });

function TransactionDialog(props) {
  const { classes } = props;

  // console.log('props', Props.data.approverGroups);
  return (
    <div className={classes.paper}>
      <div className={classes.topheader}>
        <AppBar className={classes.appbar} position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              {` Transaction ${props.selectedId}`}
            </Typography>
          </Toolbar>
          <IconButton
            className={classes.close}
            edge="end"
            aria-label="Account of current user"
            aria-haspopup="true"
            onClick={props.onClose}
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
        </AppBar>
      </div>
      <NestedList data={props.data} title="Approvers" />
      {/* <Button
        fullWidth
        variant="contained"
        size="large"
        className={classes.button}
      >
        Approvers
      </Button> */}
    </div>
  );
}

export default withStyles(styles)(TransactionDialog);
