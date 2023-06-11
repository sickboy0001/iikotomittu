"user client";
import React from "react";
import Project from "./project";
import { Menu } from "@headlessui/react";

const Projects = (props: any) => {
  const projects = [
    {
      user_id: "xxxxxxxxxxxx-xxxxxxx",
      id: 1,
      title: "W)ProcPerf",
      is_public: false,
      is_archived: false,
      description: "ProcPerf",
      action_plan: "アクションプランテスト",
      state: "done",
      start_date: "2023-01-01",
      end_date: "2023-04-01",
      important: 1,
      review: "text",
      created_at: "2023-03-01 12:31:21",
      updated_at: "2023-03-01 12:31:21",
    },
    {
      user_id: "xxxxxxxxxxxx-xxxxxxx",
      id: 2,
      title: "W)fvqs",
      is_public: false,
      is_archived: false,
      description: "fvqs",
      action_plan: "fvqsアクションプランテスト",
      state: "nodone",
      from_date: "2023-05-01",
      to_date: "2023-06-01",
      important: 1,
      review: "doing",
      created_at: "2023-04-01 12:31:21",
      updated_at: "2023-04-01 12:31:21",
    },
    {
      user_id: "xxxxxxxxxxxx-xxxxxxx",
      id: 3,
      title: "W)QstoreView",
      is_public: true,
      is_archived: true,
      description: "fvqs",
      action_plan: "fvqsアクションプランテスト",
      state: "nodone",
      from_date: "2023-05-01",
      to_date: "2023-06-01",
      important: 2,
      review: "doing",
      created_at: "2023-04-01 12:31:21",
      updated_at: "2023-04-01 12:31:21",
    },
    {
      user_id: "xxxxxxxxxxxx-xxxxxxx",
      id: 4,
      title: "W)IM-Review",
      is_public: false,
      is_archived: false,
      description: "IM-Review",
      action_plan: "準備すること",
      state: "nodone",
      from_date: "2023-05-01",
      to_date: "2023-06-01",
      important: 5,
      review: "doing",
      created_at: "2023-04-01 12:31:21",
      updated_at: "2023-04-01 12:31:21",
    },
    {
      user_id: "xxxxxxxxxxxx-xxxxxxx",
      id: 5,
      title: "eel to tuna devdb",
      is_public: false,
      is_archived: true,
      description: "Disk量に伴うサーバー周りの移動",
      action_plan: "サーバー周り準備すること",
      state: "nodone",
      from_date: "2023-07-01",
      to_date: "2023-07-10",
      important: 1,
      review: "notdo",
      created_at: "2023-04-01 12:31:21",
      updated_at: "2023-04-01 12:31:21",
    },
  ];

  return (
    <div>
      <h1>Projects</h1>
      <div className="grid grid-cols-3">
        {projects.map((project, index) => (
          <Project key={index} project={project}></Project>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Projects;
