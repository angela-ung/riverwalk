import { json, V2_MetaFunction } from '@remix-run/node';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { ClientOnly } from 'remix-utils';
import { useLoaderData } from '@remix-run/react/dist/components';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const meta: V2_MetaFunction = () => {
  return [
    { title: '48 Hours' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};
export async function loader() {
  const labels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Team Moods: Week of 7/10/23',
      },
    },
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: 'Number of People',
        },
      },
      x: {
        display: true,
        title: {
          display: true,
          text: 'Day of the Week',
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: 'Focused',
        data: labels.map(() => faker.number.int({ min: 0, max: 8 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Tired',
        data: labels.map(() => faker.number.int({ min: 0, max: 8 })),
        borderColor: 'rgb(17, 158, 26)',
        backgroundColor: 'rgba(84, 212, 92, 0.5)',
      },
      {
        label: 'Relaxed',
        data: labels.map(() => faker.number.int({ min: 0, max: 8 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return json({ options, data });
}
export default function AnalysisIndex() {
  const { options, data } = useLoaderData<typeof loader>();
  return (
    <div className="lg:text-center py-16 bg-gray-100">
      <h2 className="text-base mt-2 mb-6 text-3xl sm:text-4xl font-bold tracking-tight leading-7 text-teal-900">
        UKG Dashboard
      </h2>
      <ul className="mx-auto max-w-2xl py-4 rounded-md border border-gray-200 bg-white">
        <div className="p-8">
          <ClientOnly fallback={<Fallback />}>
            {() => <Line options={options} data={data} />}
          </ClientOnly>
        </div>
        <div className="text-right">
          <a className="ml-60 flex-shrink-0 text-right text-sm m-6 p-6 font-medium text-teal-900 hover:text-teal-800"
              href="/">
              Back
          </a>
        </div>
      </ul>
    </div>
  );
}
function Fallback() {
  return <div>Generating Chart</div>;
}