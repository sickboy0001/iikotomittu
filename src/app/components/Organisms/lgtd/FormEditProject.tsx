"user client";
import React, { Fragment, useState } from "react";
import { Combobox, Listbox, Switch, Transition } from "@headlessui/react";
import { typeproject } from "@/app/model/lgtd/projects.type";
import ButtonPrimary from "../../Atoms/Button/ButtonPrimary";
import LabelInputTitle from "../../Atoms/Lable/LabelInputTitle";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";

type Props = {
  project: typeproject;
};

const importants = [
  { id: 1, name: "★☆☆☆☆" },
  { id: 2, name: "★★☆☆☆" },
  { id: 3, name: "★★★☆☆" },
  { id: 4, name: "★★★★☆" },
  { id: 5, name: "★★★★★" },
];

const FormEditProject = (props: Props) => {
  const { project } = props;
  const [archiveEnabled, setArchiveEnabled] = useState(false);
  const [publicEnabled, setPublicEnabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedImportant, setSelectedImportant] = useState(importants[0]);

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  // 送信
  const onSubmit = async () => {
    console.log("onsubmit");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* 名前 */}
        <LabelInputTitle>title</LabelInputTitle>

        <input
          type="text"
          className="border rounded-md w-full py-1 px-3 focus:outline-none focus:border-sky-500"
          placeholder="title"
          id="title"
          value={project.title}
          required
        />

        {/* description */}
        <LabelInputTitle>description</LabelInputTitle>
        <textarea
          className="border rounded-md w-full py-1 px-3 focus:outline-none focus:border-sky-500"
          placeholder="description"
          id="introduce"
          rows={5}
          value={project.title}
        />
        {/* action_plan */}
        <LabelInputTitle>action_plan</LabelInputTitle>
        <input
          type="text"
          className="border rounded-md w-full py-1 px-3 focus:outline-none focus:border-sky-500"
          placeholder="action_plan"
          id="action_plan"
        />
        <div className="flex flex-row ">
          <div className="flex flex-row items-center">
            <Switch
              checked={archiveEnabled}
              onChange={setArchiveEnabled}
              className={`${archiveEnabled ? "bg-blue-900" : "bg-blue-200"}
                relative inline-flex h-[18px] w-[34px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 `}
            >
              <span
                aria-hidden="true"
                className={`${
                  archiveEnabled ? "translate-x-4" : "translate-x-0"
                }
                    pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
            <div className="py-1 px-3">archive</div>
          </div>
          <div className="flex flex-row items-center">
            <Switch
              checked={publicEnabled}
              onChange={setPublicEnabled}
              className={`${publicEnabled ? "bg-blue-900" : "bg-blue-200"}
            relative inline-flex h-[18px] w-[34px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span
                aria-hidden="true"
                className={`${publicEnabled ? "translate-x-4" : "translate-x-0"}
                        pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
            <div className="py-1 px-3">public</div>
          </div>
          <div className="flex flex-row items-center">
            {/* important */}
            <LabelInputTitle>important</LabelInputTitle>

            <div className="fixed">
              <Listbox
                value={selectedImportant}
                onChange={setSelectedImportant}
              >
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">
                      {selectedImportant.name}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {importants.map((Important, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={Important.name}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {Important.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
        </div>
        {/* action_plan */}
        <LabelInputTitle>review</LabelInputTitle>
        <input
          type="text"
          className="border rounded-md w-full py-1 px-3 focus:outline-none focus:border-sky-500"
          placeholder="review"
          id="review"
        />
        {/* 更新 */}
        <div className="mb-5">
          <ButtonPrimary>更新</ButtonPrimary>
        </div>
      </form>
    </div>
  );
};

export default FormEditProject;
