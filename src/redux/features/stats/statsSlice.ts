import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface StatsState {
  overview: {
    totalRevenue: number;
    totalOrders: number;
    totalCustomers: number;
    totalProducts: number;
  };
  revenueByMonth: {
    month: string;
    revenue: number;
  }[];
  salesByCategory: {
    category: string;
    value: number;
  }[];
  recentActivities: {
    id: string;
    type: 'order' | 'user' | 'product';
    description: string;
    time: string;
  }[];
}

const initialState: StatsState = {
  overview: {
    totalRevenue: 28945.66,
    totalOrders: 156,
    totalCustomers: 89,
    totalProducts: 32,
  },
  revenueByMonth: [
    { month: 'Jan', revenue: 2100 },
    { month: 'Feb', revenue: 2400 },
    { month: 'Mar', revenue: 1800 },
    { month: 'Apr', revenue: 2800 },
    { month: 'May', revenue: 3200 },
    { month: 'Jun', revenue: 2780 },
    { month: 'Jul', revenue: 3480 },
    { month: 'Aug', revenue: 3800 },
    { month: 'Sep', revenue: 4100 },
    { month: 'Oct', revenue: 3750 },
    { month: 'Nov', revenue: 3200 },
    { month: 'Dec', revenue: 4200 },
  ],
  salesByCategory: [
    { category: 'Electronics', value: 45 },
    { category: 'Audio', value: 30 },
    { category: 'Wearables', value: 15 },
    { category: 'Accessories', value: 10 },
  ],
  recentActivities: [
    {
      id: '1',
      type: 'order',
      description: 'New order #ORD-004 from Jessica User',
      time: '10 minutes ago',
    },
    {
      id: '2',
      type: 'user',
      description: 'New user David Vendor registered',
      time: '2 hours ago',
    },
    {
      id: '3',
      type: 'product',
      description: 'Product "Bluetooth Speaker" stock updated',
      time: '3 hours ago',
    },
    {
      id: '4',
      type: 'order',
      description: 'Order #ORD-003 status updated to Shipped',
      time: '5 hours ago',
    },
    {
      id: '5',
      type: 'product',
      description: 'New product "Smart Home Hub" added',
      time: '1 day ago',
    },
  ],
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    // We could add reducers here to update stats based on actions
    // like adding new orders, users, etc.
  },
});

export const selectOverviewStats = (state: RootState) => state.stats.overview;
export const selectRevenueByMonth = (state: RootState) => state.stats.revenueByMonth;
export const selectSalesByCategory = (state: RootState) => state.stats.salesByCategory;
export const selectRecentActivities = (state: RootState) => state.stats.recentActivities;

export default statsSlice.reducer;