import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://643287aad0127730d2d4343c.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = axios.get('/contacts');
      const data = response;
      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);
