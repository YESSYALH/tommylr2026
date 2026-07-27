export type TransactionType = 'income' | 'expense' | 'asset' | 'liability';
export type TransactionCategory = 
  | 'salary' | 'business' | 'investment' | 'dividend' // income
  | 'housing' | 'food' | 'transport' | 'utilities' | 'insurance' | 'debt' | 'personal' | 'taxes' // expense
  | 'real_estate' | 'stocks' | 'crypto' | 'cash' | 'infinite_banking' // asset
  | 'mortgage' | 'loan' | 'credit_card'; // liability

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  createdAt: number;
  setupCompleted: boolean;
  currency: string;
}

export interface Transaction {
  id?: string;
  userId: string;
  type: TransactionType;
  category: TransactionCategory;
  amount: number;
  date: number; // Unix timestamp for easier sorting/querying in Firestore
  description: string;
  notes?: string;
  createdAt: number;
}
