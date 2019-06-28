export enum Vote {
  Pending = 'pending',
  Approved = 'approved',
  Rejected = 'rejected',
  Obstained = 'obstained'
}

export interface Approver {
  id: string;
  name: string;
  vote: Vote;
  voteDate: string;
}

export interface ApproversGroup {
  id: string;
  name: string;
  approvers: Approver[];
}

export interface Transaction {
  id: string;
  approverGroups: ApproversGroup[];
}
