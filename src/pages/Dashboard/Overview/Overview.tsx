import BarChart from '../BarChart/BarChart';
import PieChart from '../PieChart/PieChart';

const Overview = () => {
  const revenueData = [
    { month: 'Jan', revenue: 32000 },
    { month: 'Feb', revenue: 28000 },
    { month: 'Mar', revenue: 35000 },
    { month: 'Apr', revenue: 30000 },
    { month: 'May', revenue: 40000 },
    { month: 'Jun', revenue: 37000 },
  ];

  const categoryData = [
    { category: 'Mountain', value: 35 },
    { category: 'Road', value: 25 },
    { category: 'Hybrid', value: 20 },
    { category: 'Electric', value: 20 },
  ];

  const revenueChartData = {
    labels: revenueData.map(item => item.month),
    datasets: [
      {
        label: 'Revenue',
        data: revenueData.map(item => item.revenue),
        backgroundColor: 'rgba(79, 70, 229, 0.8)',
      },
    ],
  };

  const categoryChartData = {
    labels: categoryData.map(item => item.category),
    datasets: [
      {
        data: categoryData.map(item => item.value),
        backgroundColor: [
          'rgba(79, 70, 229, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's what's happening in your bike store today.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <BarChart title="Monthly Revenue" data={revenueChartData} height={350} />
        </div>
        <div>
          <PieChart title="Sales by Bike Category" data={categoryChartData} height={350} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
