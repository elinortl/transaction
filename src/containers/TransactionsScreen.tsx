import * as React from 'react';
import Button from '@material-ui/core/Button';
import './style.css';
import { withStyles, createStyles, WithStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import TransactionDialog from './TransactionDialog';
import { fetchTransaction } from '../lib/api';

const TRANSACTION_IDS = ['1', '2'];

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

function TransactionScreen({ classes }: Props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState();

  // getModalStyle is not a pure function, we roll the style only on the first render

  const handleOpen = () => {
    setOpen(true);

    fetchTransaction('1').then(data => {
      setData(data);
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log('data', data);

  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <TransactionDialog />
      </Modal>
      <img src="./curv_logo_white.png" alt="logo" className={classes.logo} />

      {TRANSACTION_IDS.map(tid => (
        <Button
          variant="contained"
          size="large"
          className={classes.button}
          key={tid}
          onClick={handleOpen}
        >
          {`View Transaction ${tid}`}
        </Button>
      ))}
    </div>
  );
}

export default withStyles(styles)(TransactionScreen);
