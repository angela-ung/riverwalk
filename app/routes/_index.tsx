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
                  className="font-semibold mt-3 text-lg h-10 leading-8 text-teal-400"
                >
                  Team Status
                </p>
              </li>
              <li className="text-left">
                <div className=" ml-5 mt-3 text-lg h-10 leading-8 text-teal-900">
                  John Doe (Me)
                  <a className="rounded-md text-sm bg-teal-400 m-6 p-2 font-medium text-teal-900 hover:text-teal-800">
										excited
									</a>
                  <a className="ml-60 flex-shrink-0 text-right text-sm m-6 p-6 font-medium text-teal-900 hover:text-teal-800"
                    href="/status">
                      Change Status
                  </a>
                </div>

                <div className=" ml-5 mt-3 text-lg h-10 leading-8 text-teal-900">
                  Olivia Feller
                  <a className="rounded-md text-sm bg-teal-400 m-6 p-2 font-medium text-teal-900 hover:text-teal-800">
										focused
									</a>
                </div>

                <div className=" ml-5 mt-3 text-lg h-10 leading-8 text-teal-900">
                  Neyaa Rajan
                  <a className="rounded-md text-sm bg-teal-400 m-6 p-2 font-medium text-teal-900 hover:text-teal-800">
										relaxed
									</a>
                </div> 

                <div className=" ml-5 mt-3 text-lg h-10 leading-8 text-teal-900">
                  Angela Ung
									<a className="rounded-md text-sm bg-teal-400 m-6 p-2 font-medium text-teal-900 hover:text-teal-800">
										confused
									</a>
                </div>
              </li>
            </ul>
		</div>
  );
}
