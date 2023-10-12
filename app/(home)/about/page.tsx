import Link from "next/link";
import React from "react";

function AboutPage() {
  return (
    <div className="flex flex-col gap-10 p-10 content-start justify-center">
      <div className="flex flex-col gap-1 content-start max-md:w-full w-1/2">
        <h1 className="font-montserrat font-extrabold text-xl text-gray-300">
          About:
        </h1>
        <p className="font-montserrat font-medium text-sm text-gray-300">
          NoteQuest is your ultimate note taking companion. Now creating notes
          on the fly is a breeze. Does not matter you are holding a cell phone,
          tablet or a laptop. Just login to your account at NoteQuest and start
          writing!
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="font-montserrat font-bold text-lg text-gray-300">
            Tech Stack:
          </h2>
          <ul className="ml-1 pt-1 font-montserrat font-medium text-sm text-gray-300">
            <li>NextJs 13.5</li>
            <li>React 18</li>
            <li>MongoDb</li>
            <li>Clerk Auth</li>
            <li>Tailwind Css</li>
            <li>NextUi</li>
          </ul>
        </div>
        <div>
          <h2 className="font-montserrat font-bold text-lg text-gray-300">
            Features:
          </h2>
          <ul className=" pt-1 font-montserrat font-medium text-sm text-gray-300">
            <li>Attractive but simple layout</li>
            <li>Built using latest web technologies</li>
            <li>Fast and latest authentication</li>
            <li>Create Notes with ease</li>
            <li>Edit and delete notes</li>
            <li>Fully responsive on all devices</li>
          </ul>
        </div>
        <div>
          <h2 className="font-montserrat font-bold text-lg text-gray-300">
            Upcoming:
          </h2>
          <ul className=" pt-1 font-montserrat font-medium text-sm text-gray-300">
            <li>Ai Assistant</li>
            <li>Pagination</li>
            <li>Unlimited Word Count</li>
            <li>Team collaboration</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default AboutPage;
