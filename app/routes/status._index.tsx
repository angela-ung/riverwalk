import { ActionArgs, redirect, type V2_MetaFunction } from "@remix-run/node";
import React from 'react';
import { getEmotion } from "./_index";
import { badRequest } from '~/utils/request.server'


export const meta: V2_MetaFunction = () => {
  return [
    { title: "Change Status" },
    { name: "description", content: "Made by Angela Ung, Neyaa " },
  ];
};

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const emotion = form.get('emotion');

	if (!emotion) {
		return badRequest({
			formError:
				'Error Occured. Bad Request.',
		})
	}

  return getEmotion(emotion + "");
}

export default function StatusIndex() {
  return (
		<div className="lg:text-center py-16 bg-gray-100">
						<h2 className="text-base mt-2 mb-6 text-3xl sm:text-4xl font-bold tracking-tight leading-7 text-teal-900">
							UKG Dashboard
						</h2>
            <ul className="mx-auto max-w-2xl py-4 rounded-md border border-gray-200 bg-white">
              <li>
                <p className="font-semibold mt-3 text-lg h-10 leading-8 text-teal-400">
                  How are you feeling today?
                </p>
              </li>
              <form method="post" action="/status">
                <select name="emotion" className="pl-4 mx-auto w-64 max-w-2xl py-4 divide-y divide-gray-100 rounded-md border border-gray-200 bg-white">
                    <option value="neutral">Neutral</option>
                    <option value="annoyed">Annoyed</option>
                    <option value="confused">Confused</option>
                    <option value="excited">Excited</option>
                    <option value="focused">Focused</option>
                    <option value="inspired">Inspired</option>
                    <option value="motivated">Motivated</option>
                    <option value="relaxed">Relaxed</option>
                    <option value="sociable">Sociable</option>
                    <option value="tired">Tired</option>
                  </select>
                  <div className="m-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-x-2 rounded-md bg-teal-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                    >
                      Submit
                    </button>
                  </div>
              </form>
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
function createProject(body: any) {
  throw new Error("Function not implemented.");
}
