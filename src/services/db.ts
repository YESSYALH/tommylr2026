import { db } from '@/lib/firebase/client';
import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  orderBy, 
  deleteDoc,
  updateDoc
} from 'firebase/firestore';
import { UserProfile, Transaction } from '@/types';

// USERS
export async function createUserProfile(uid: string, data: Partial<UserProfile>) {
  const userRef = doc(db, 'users', uid);
  const snapshot = await getDoc(userRef);
  
  if (!snapshot.exists()) {
    const defaultProfile: UserProfile = {
      uid,
      email: data.email || null,
      displayName: data.displayName || null,
      photoURL: data.photoURL || null,
      createdAt: Date.now(),
      setupCompleted: false,
      currency: 'USD',
      ...data
    };
    await setDoc(userRef, defaultProfile);
  }
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.includes('mock')) {
    return {
      uid: 'demo-123',
      email: 'demo@tommylruff.com',
      displayName: 'Demo User',
      photoURL: null,
      createdAt: Date.now(),
      setupCompleted: true,
      currency: 'USD'
    };
  }

  const userRef = doc(db, 'users', uid);
  const snapshot = await getDoc(userRef);
  if (snapshot.exists()) {
    return snapshot.data() as UserProfile;
  }
  return null;
}

// TRANSACTIONS
let mockTransactions: Transaction[] = [
  { id: '1', userId: 'demo-123', type: 'income', category: 'business', amount: 15000, date: Date.now() - 86400000 * 5, description: 'Client Retainer', createdAt: Date.now() },
  { id: '2', userId: 'demo-123', type: 'expense', category: 'housing', amount: 3500, date: Date.now() - 86400000 * 2, description: 'Office Lease', createdAt: Date.now() },
  { id: '3', userId: 'demo-123', type: 'asset', category: 'infinite_banking', amount: 5000, date: Date.now() - 86400000 * 1, description: 'Policy Premium Contribution', createdAt: Date.now() }
];

export async function addTransaction(transaction: Omit<Transaction, 'id' | 'createdAt'>) {
  if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.includes('mock')) {
    const newTx = { ...transaction, id: Math.random().toString(), createdAt: Date.now() };
    mockTransactions.push(newTx);
    return newTx.id;
  }

  const transactionsRef = collection(db, 'transactions');
  const docRef = await addDoc(transactionsRef, {
    ...transaction,
    createdAt: Date.now(),
  });
  return docRef.id;
}

export async function getUserTransactions(uid: string): Promise<Transaction[]> {
  if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.includes('mock')) {
    return [...mockTransactions].sort((a, b) => b.date - a.date);
  }

  const transactionsRef = collection(db, 'transactions');
  const q = query(
    transactionsRef,
    where('userId', '==', uid),
    orderBy('date', 'desc')
  );
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Transaction[];
}

export async function deleteTransaction(transactionId: string) {
  const txRef = doc(db, 'transactions', transactionId);
  await deleteDoc(txRef);
}

export async function updateTransaction(transactionId: string, data: Partial<Transaction>) {
  const txRef = doc(db, 'transactions', transactionId);
  await updateDoc(txRef, data);
}
