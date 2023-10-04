import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useDashboardContext } from "../pages/DashboardLayout";

const BarChartComponent = ({ data }) => {
  const { isDarkTheme } = useDashboardContext();
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3 " />
        <XAxis dataKey="date" stroke={isDarkTheme ? "#FFD83C" : "#7330F9"} />
        <YAxis allowDecimals={false} stroke={isDarkTheme ? "#FFD83C" : "#7330F9"} />
        <Tooltip contentStyle={{color: isDarkTheme ? "#3f3f3f" : '#7330F9'}} itemStyle={{ color: isDarkTheme ? "#3f3f3f" : '#7330F9' }} />
        <Bar dataKey="count" fill={isDarkTheme ? "#FFD83C" : "#7330F9"} barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
