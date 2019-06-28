import { ApproversGroup, Vote, Transaction } from './entities';

export const approverGroups: ApproversGroup[] = [
  {
    id: 'g11',
    name: 'US Admins',
    approvers: [
      {
        id: '11',
        name: 'Eyal Wiener',
        vote: Vote.Approved,
        voteDate: 'June 1, 2019'
      },
      {
        id: '22',
        name: 'Jason Levi',
        vote: Vote.Rejected,
        voteDate: 'June 2, 2019'
      }
    ]
  },
  {
    id: 'g13',
    name: 'Tel-Aviv Admins',
    approvers: [
      {
        id: '33',
        name: 'Offer Nissim',
        vote: Vote.Obstained,
        voteDate: 'June 1, 2019'
      },
      {
        id: '44',
        name: 'Mariah Carey',
        vote: Vote.Pending,
        voteDate: 'June 2, 2019'
      },
      {
        id: '55',
        name: 'Sagi Kariv',
        vote: Vote.Pending,
        voteDate: 'June 2, 2019'
      }
    ]
  }
];

export const transactions: Transaction[] = [
  {
    id: '1',
    approverGroups
  },
  {
    id: '2',
    approverGroups: [approverGroups[1]]
  }
];
