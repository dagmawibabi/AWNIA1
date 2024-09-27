"use client";

import Image from "next/image";
import afriwork from "../../assets/afriwork.png";

export default function AI() {
    return (
        <div className="w-1/2 mx-auto flex flex-col h-screen text-black">
            {/* Logo*/}
            <div className="flex flex-col gap-4 items-center">
                <Image
                    src={afriwork}
                    alt="poster"
                    width={200}
                    height={350}
                    className="py-5"
                />
            </div>

            {/* Suggested Prompts */}
            <div className="flex flex-col items-center pt-52">
                <h2 className="text-xl font-bold pb-5">Suggested Prompts</h2>
                <div className="flex flex-col gap-2 w-fit mx-auto items-center">
                    <div className="bg-gray-200 text-gray-800 text-sm font-medium p-2 rounded dark:bg-gray-700 dark:text-gray-300">
                        Who is Robert Downy Jr?
                    </div>
                    <div className="bg-gray-200 text-gray-800 text-sm font-medium p-2 rounded dark:bg-gray-700 dark:text-gray-300">
                        What are some top rated movies?
                    </div>
                    <div className="bg-gray-200 text-gray-800 text-sm font-medium p-2 rounded dark:bg-gray-700 dark:text-gray-300">
                        Can artificial intelligence produce movies?
                    </div>
                </div>
            </div>

            {/* Chat messages will go here */}
            <div className="flex-1 overflow-y-auto p-4"></div>

            {/* Input Fi */}
            <div className="flex w-full gap-2">
                <textarea
                    className="mt-4 p-2 border rounded-lg w-full h-10 text-white"
                    placeholder="Type your message here..."
                ></textarea>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Send
                </button>
            </div>
            <p className="my-3 text-sm text-center">
                By messaging this AI, you agree to our Terms and have read our
                Privacy Policy.
            </p>
        </div>
    );
}
