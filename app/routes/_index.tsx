import { ActionArgs, redirect, type V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from 'react';
const {createRequestHandler} = require("@remix-run/express");

var currEmo = "Neutral"

export async function getEmotion(emotion: string) {
  currEmo = emotion;
  return redirect(`/`)
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "48 Hours Project" },
    { name: "description", content: "Made by Angela Ung, Neyaa " },
  ];
};

export const loader = async () => {
  return currEmo
}

export default function Index() {
  const curremotion = useLoaderData<typeof loader>();
  
  return (
		<div className="lg:text-center py-16 bg-gray-100">
						<h2 className="text-base mt-2 mb-6 text-3xl sm:text-4xl font-bold tracking-tight leading-7 text-teal-900">
							UKG Dashboard
						</h2>
            <ul className="mx-auto max-w-2xl py-4 divide-y divide-gray-100 rounded-md border border-gray-200 bg-white">
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
										{curremotion}
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
                <div className="text-right">
                <a className="ml-60 flex-shrink-0 text-right text-sm m-6 p-6 font-medium text-teal-900 hover:text-teal-800"
                    href="/analysis">
                      View Status Analysis
                  </a>
                </div>
              </li>
            </ul>
		</div>
  );
}
function createProject(body: any) {
  throw new Error("Function not implemented.");
}

