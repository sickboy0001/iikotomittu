"user client";
import React, { Fragment, useState } from "react";
import LabelItemName from "../../Atoms/Lable/LabelItemName";
import LabelItemSub from "../../Atoms/Lable/LabelItemSub";
import LabelItemSmall from "../../Atoms/Lable/LabelItemSmall";
import {
  DocumentTextIcon,
  LockOpenIcon,
  BookmarkSlashIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { typeproject } from "@/app/model/lgtd/projects.type";
import EditModalButton from "@/app/components/Molecules/EditModalButton";
import FormEditProject from "./FormEditProject";
// import { ButtonToThing } from "@/app/components/Atoms/Button/ButtonToThing";

type Props = {
  project: typeproject;
};

const Project = (props: any) => {
  const { project } = props;

  return (
    <div key={project.title}>
      <div className=" border rounded-lg  border-gray-500 m-1">
        <div className="flex">
          <div className="flex justify-normal  w-full">
            <LabelItemName>{project.title}</LabelItemName>
          </div>
          <div className="flex justify-end w-full">
            <LabelItemSmall>{project.state}</LabelItemSmall>
            <LabelItemSmall>{project.important}</LabelItemSmall>
            <LabelItemSmall>
              {project.is_public ? (
                <div>
                  <LockOpenIcon className="inline-block w-5 h-5 mr-1" />
                </div>
              ) : (
                ""
              )}
            </LabelItemSmall>
            <LabelItemSmall>
              {project.is_archived ? (
                <div>
                  <BookmarkSlashIcon className="inline-block w-5 h-5 mr-1" />
                </div>
              ) : (
                ""
              )}
            </LabelItemSmall>
            <EditModalButton title={project.title}>
              <FormEditProject project={project} />
            </EditModalButton>
          </div>
        </div>
        <div>
          <LabelItemSub>{project.description}</LabelItemSub>
        </div>
      </div>
    </div>
  );
};

export default Project;
