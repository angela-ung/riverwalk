import type { V2_MetaFunction } from "@remix-run/node";
import React from 'react';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "48 Hours Project" },
    { name: "description", content: "Made by Angela Ung, Neyaa " },
  ];
};

export default function AnalysisIndex() {
  return (
		<div className="lg:text-center py-16 bg-gray-100">
						<h2 className="text-base mt-2 mb-6 text-3xl sm:text-4xl font-bold tracking-tight leading-7 text-teal-900">
							UKG Dashboard
						</h2>
            <ul className="mx-auto max-w-2xl py-4 divide-y divide-gray-100 rounded-md border border-gray-200 bg-white">
              THIS IS WHERE YOU PUT THE GRAPH
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
