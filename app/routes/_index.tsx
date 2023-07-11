import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "48 Hours Project" },
    { name: "description", content: "Made by Angela Ung, Neyaa " },
  ];
};

export default function Index() {
  return (
		<div className="lg:text-center py-8 bg-gray-100">
						<h2 className="text-base mt-2 mb-6 text-3xl sm:text-4xl font-bold tracking-tight leading-7 text-teal-900">
							UKG Dashboard
						</h2>
            <ul className="mx-auto max-w-2xl divide-y divide-gray-100 rounded-md border border-gray-200 bg-white">
              <li>
                <p
                  className="mt-3 text-lg h-10 leading-8 text-teal-400"
                  >
                  Team Status
                </p>
              </li>
              <li className="text-left">
                <p
                  className=" ml-3 mt-3 text-lg h-10 leading-8 text-teal-400"
                >
                  Olivia Feller
                </p>
                <p
                  className=" ml-3 mt-3 text-lg h-10 leading-8 text-teal-400"
                >
                  Olivia Feller
                </p>
                <p
                  className=" ml-3 mt-3 text-lg h-10 leading-8 text-teal-400"
                >
                  Olivia Feller
                </p>
              </li>
            </ul>
		</div>
  );
}
