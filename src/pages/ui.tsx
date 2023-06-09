/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "@super/utils/api";
import { useEffect, useRef, useCallback } from 'react'

import {EditorView, basicSetup} from "codemirror"
import CodeMirror from '@uiw/react-codemirror';
import {javascript} from "@codemirror/lang-javascript"



const UI: NextPage = () => {

    const codeMirrorRef = useRef()

    const onChange = useCallback((value: any, viewUpdate: any) => {
        console.log('value:', value);
      }, []);
  

  return (
    <>
      <Head>
        <title>UI</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div>
            {/* a heading that says Phase 1 */}
            <h2 className="text-2xl font-bold">Phase 1</h2>
            {/* a div that all child elements will be inline next to each other */}
            <div className="flex flex-shrink flex-row">
              <button
                disabled={false}
                className="disabled:text-gray-300 dark:text-black dark:disabled:text-gray-400"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-3 w-3"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <span className="flex-shrink-0">1 / 2</span>
              <button
                disabled={true}
                className="disabled:text-gray-300 dark:text-black dark:disabled:text-gray-400"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-3 w-3"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
            <div className="rounded-md border border-gray-200">
              <textarea
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Enter some text"
                aria-describedby="message-max"
                rows={15}
              ></textarea>
            </div>
            {/* create a button group of inline buttons all gray with equal padding between them: 4 buttons named "write app ideas" "convert using functional programming" "algorithms (dropdown) and data structures (dropdown) */}
            <div className="flex flex-row">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Write app ideas
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Convert using functional programming
              </button>
              
            </div>

            {/*  a slider that goes across the page with label: temperature */}
            <div className="flex flex-col">
              <label
                htmlFor="temperature"
                className="block text-sm font-medium text-gray-700"
              >
                Temperature
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="range"
                  name="temperature"
                  id="temperature"
                  className="block w-full flex-1 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  min="0"
                  max="100"
                />
              </div>
            </div>
            <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
          </div>
        </div>
      </main>
    </>
  );
};

export default UI;
