import * as React from 'react';
import './style.css';
import { withStyles, createStyles, WithStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

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
    }
  });

type Props = WithStyles<typeof styles>;

function TransactionDialog({ classes }: Props) {
  return <div className={classes.root}>test</div>;
}

export default withStyles(styles)(TransactionDialog);
