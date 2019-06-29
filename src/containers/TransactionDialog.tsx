import * as React from 'react';
import './style.css';
import { withStyles, createStyles, WithStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import NestedList from '../components/NestedList';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.dark,
      width: '100%',
      height: '100%'
    },
    topheader: {
      width: '100%',
      margin: 0,
      padding: 0
    },
    appbar: {
      alignItems: 'center'
    },
    button: {
      backgroundColor: 'white',
      color: theme.palette.text.primary,
      // color: 'white',
      marginBottom: 20,
      width: 240,
      height: 50
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
      transform: 'translate(-50%, -50%)'
    },
    close: {
      position: 'absolute',
      right: 20,
      top: 10
    },
    roott: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  });

type Props = WithStyles<typeof styles>;

function TransactionDialog(Props) {
  const { classes } = Props;

  console.log('props', Props.data.approverGroups);
  return (
    <div className={classes.paper}>
      <div className={classes.topheader}>
        <AppBar className={classes.appbar} position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              {` Transaction ${Props.selectedId}`}
            </Typography>
          </Toolbar>
          <IconButton
            className={classes.close}
            edge="end"
            aria-label="Account of current user"
            aria-haspopup="true"
            onClick={Props.onClose}
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
        </AppBar>
      </div>
      <NestedList data={Props.data} />
    </div>
  );
}

export default withStyles(styles)(TransactionDialog);
