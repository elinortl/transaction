import * as React from 'react';
import '../containers/style.css';
import { ListItemIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ListSubheader from '@material-ui/core/ListSubheader';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClick() {
    setOpen(!open);
  }

  console.log('props', props.data.approverGroups);
  const items = props.data.approverGroups;
  return (
    <div>
      {
        <List
          className={classes.root}
          key={1}
          subheader={<ListSubheader>Approvers</ListSubheader>}
        >
          {items.map(item => {
            return (
              <div key={item.id}>
                {item.approvers != null ? (
                  <div key={item.id}>
                    <ListItem button key={item.id} onClick={handleClick}>
                      <ListItemIcon>
                        <PeopleIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse
                      key={items.id}
                      component="li"
                      in={open}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List disablePadding>
                        {item.approvers.map(sitem => {
                          return (
                            <ListItem
                              button
                              key={sitem.id}
                              className={classes.nested}
                            >
                              <ListItemIcon>
                                <PersonIcon />
                              </ListItemIcon>
                              <ListItemText
                                key={sitem.id}
                                primary={sitem.name}
                              />
                            </ListItem>
                          );
                        })}
                      </List>
                    </Collapse>{' '}
                  </div>
                ) : (
                  <ListItem button onClick={handleClick} key={item.id}>
                    <ListItemText primary={item.name} />
                  </ListItem>
                )}
              </div>
            );
          })}
        </List>
      }
    </div>
  );
}

export default NestedList;
