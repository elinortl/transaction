import * as React from 'react';
import './style.css';
import { withStyles, createStyles, WithStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    logo: {
      width: 120,
      marginBottom: 60
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
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      justifySelf: 'center',
      flexDirection: 'column',
      // position: 'absolute',
      // width: 400,
      display: 'flex',
      height: '60%',
      flex: 1,
      backgroundColor: 'red',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      outline: 'none',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  });

type Props = WithStyles<typeof styles>;

function TransactionDialog({ classes }: Props) {
  return <div className={classes.paper}>test</div>;
}

export default withStyles(styles)(TransactionDialog);
