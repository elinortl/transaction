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
import { Vote } from '../lib/entities';
import { AVATAR_COLORS } from '../lib/constants';

const monthNames = {
  January: '1',
  February: '2',
  March: '3',
  April: '4',
  May: '5',
  June: '6',
  July: '7',
  August: '8',
  September: '9',
  October: '10',
  November: '11',
  December: '12'
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  container: { overflow: 'auto' }
}));

const getNumberOfVoters = approvers => {
  const approversArray = approvers.filter(x => x.vote !== Vote.Pending);
  return `${approversArray.length} voted out of ${approvers.length}`;
};

const getVodeStatusText = (voteDesc, date) => {
  const daysDiff = getDateDiff(date);
  if (voteDesc === Vote.Pending) return 'pending vote...';
  else if (voteDesc === Vote.Obstained) return `obstained ${daysDiff} days ago`;
  else if (voteDesc === Vote.Approved) return `approved ${daysDiff} days ago`;
  else if (voteDesc === Vote.Rejected) return `rejected ${daysDiff} days ago`;
  else return '';
};

const getDateDiff = date => {
  const dateObj = new Date();
  const currenMonth = dateObj.getUTCMonth() + 1;
  const currentDay = dateObj.getUTCDate();
  const currentYear = dateObj.getUTCFullYear();

  const givenDate = date.replace(',', '');
  const dateArray = givenDate.split(' ');

  dateArray[0] = monthNames[dateArray[0]];

  const parsedDate = dateArray.join('/');
  const currentDate = `${currenMonth}/${currentDay}/${currentYear}`;

  const date1 = new Date(currentDate);
  const date2 = new Date(parsedDate);

  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

function NestedList(props) {
  const classes = useStyles();
  const [groups, setGroups] = React.useState({});

  function handleClick(tid) {
    // console.log('tid', tid);
    setGroups({ [tid]: !groups[tid] });
  }

  // console.log('props', props.data.approverGroups);
  const items = props.data.approverGroups;
  return (
    <div className={classes.container}>
      {
        <List
          className={classes.root}
          // key={1}
          subheader={<ListSubheader>{props.title}</ListSubheader>}
        >
          {items.map((item, index) => {
            return (
              <div key={item.id}>
                {item.approvers != null ? (
                  <div key={item.id}>
                    <ListItem
                      button
                      key={item.id}
                      onClick={() => handleClick(item.id)}
                    >
                      <ListItemIcon>
                        <PeopleIcon style={{ color: AVATAR_COLORS[index] }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        secondary={getNumberOfVoters(item.approvers)}
                      />
                      {groups[item.id] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse
                      key={items.id}
                      component="li"
                      in={groups[item.id]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List disablePadding>
                        {item.approvers.map((sitem, j) => {
                          return (
                            <ListItem
                              button
                              key={sitem.id}
                              className={classes.nested}
                            >
                              <ListItemIcon>
                                <PersonIcon
                                  style={{ color: AVATAR_COLORS[j + index] }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                key={sitem.id}
                                primary={sitem.name}
                                // secondary="vote"
                                secondary={getVodeStatusText(
                                  sitem.vote,
                                  sitem.voteDate
                                )}
                              />
                            </ListItem>
                          );
                        })}
                      </List>
                    </Collapse>{' '}
                  </div>
                ) : (
                  <ListItem
                    button
                    onClick={() => handleClick(item.id)}
                    key={item.id}
                  >
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
