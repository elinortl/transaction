import delay from 'delay';
import { transactions } from './data';
import { Transaction } from './entities';

export async function fetchTransaction(id: string): Promise<Transaction> {
  await delay(1500);

  return transactions.find(t => t.id === id);
}
