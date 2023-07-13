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
//import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
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
    'Confused',
    'Tired',
    'Focused',
    'Relaxed'
  ];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Moods: Week of 7/10/23',
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: 'Focused',
        data: labels.map(() => faker.number.int({ min: 0, max: 3 })),
        borderColor: ['#FF7079',
        '#FFC096',
        '#67EACC',
        '#8395EA'],
        backgroundColor: ['rgb(255, 154, 162)',
        'rgb(255, 218, 193)',
        'rgb(181, 234, 215)',
        'rgb(199, 206, 234)']
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
            {() => <Pie options={options} data={data} />}
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




