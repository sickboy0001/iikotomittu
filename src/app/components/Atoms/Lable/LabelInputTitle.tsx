import classNames from "classnames";
import React from "react";
type Props = {
  children: any;
  htmlFor?: string;
};
function LabelInputTitle(props: Props) {
  const { children, htmlFor } = props;

  //   var thisClassName =
  //     props.className === undefined
  //       ? classNames(
  //           "mb-1",
  //           "text-xs",
  //           "sm:text-sm",
  //           "tracking-wide",
  //           "text-gray-600"
  //         )
  //       : props.className;

  return (
    <label className="text-sm mb-1 font-bold" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default LabelInputTitle;
