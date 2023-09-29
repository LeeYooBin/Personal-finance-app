import { RootState } from "./index";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const saveState = (state: TransactionsState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("transactionsState", serializedState);
  } catch (err) {
    console.log("Erro");
  }
};

const loadState = (): TransactionsState => {
  const defaultInitialState = {
    list: [],
    total: 0,
    totalWithdrawals: 0,
    totalDeposits: 0
  };
  try {
    const serializedState = localStorage.getItem("transactionsState");
    if (serializedState === null) {
      return defaultInitialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return defaultInitialState;
  }
};

const calculateTotals = (list: Transaction[]) => {
  const total = list.reduce((acc, transaction) => {
    return (
      acc + (transaction.isDepositStatus ? transaction.value : -transaction.value)
    );
  }, 0);

  const totalDeposits = list.reduce((acc, transaction) => {
    return acc + (transaction.isDepositStatus ? transaction.value : 0);
  }, 0);

  const totalWithdrawals = list.reduce((acc, transaction) => {
    return acc + (transaction.isDepositStatus ? 0 : transaction.value);
  }, 0);

  return { total, totalDeposits, totalWithdrawals };
};

interface Transaction {
  ID: string;
  value: number;
  title: string;
  isDepositStatus: boolean;
  date: Date;
}

interface TransactionsState {
  list: Transaction[];
  total: number;
  totalWithdrawals: number;
  totalDeposits: number;
}

const initialState: TransactionsState = loadState();

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      const { value, isDepositStatus, date } = action.payload;
      state.list.push({ ...action.payload, date });
      state.total += isDepositStatus ? value : -value;
      state.totalDeposits += isDepositStatus ? value : 0;
      state.totalWithdrawals += isDepositStatus ? 0 : value;
      saveState(state);
    },

    removeTransaction(state, action: PayloadAction<string>) {
      const transactionId = action.payload;
      state.list = state.list.filter(
        (transaction) => transaction.ID !== transactionId
      );
      const { total, totalDeposits, totalWithdrawals } = calculateTotals(
        state.list
      );
      state.total = total;
      state.totalDeposits = totalDeposits;
      state.totalWithdrawals = totalWithdrawals;
      saveState(state);
    },

    editTransaction(state, action: PayloadAction<Transaction>) {
      const { ID, value, title, isDepositStatus, date } = action.payload;
      const transactionIndex = state.list.findIndex(
        (transaction) => transaction.ID === ID
      );

      if (transactionIndex !== -1) {
        state.list[transactionIndex].value = value;
        state.list[transactionIndex].title = title;
        state.list[transactionIndex].isDepositStatus = isDepositStatus;
        state.list[transactionIndex].date = date;
        const { total, totalDeposits, totalWithdrawals } = calculateTotals(
          state.list
        );
        state.total = total;
        state.totalDeposits = totalDeposits;
        state.totalWithdrawals = totalWithdrawals;
        saveState(state);
      }
    }
  }
});

export const { addTransaction, removeTransaction, editTransaction } =
  transactionsSlice.actions;

export const selectTransactions = (state: RootState) => state.transactions.list;
export const selectTotal = (state: RootState) => state.transactions.total;
export const selectTotalWithdrawals = (state: RootState) =>
  state.transactions.totalWithdrawals;
export const selectTotalDeposits = (state: RootState) =>
  state.transactions.totalDeposits;

export default transactionsSlice.reducer;
