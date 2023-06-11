import classNames from "classnames";
import React from "react";
type Props = {
  children: any;
  htmlFor?: string;
};
function LabelInputTitle(props: Props) {
  const { children, htmlFor } = props;

  return (
    <label className="text-sm mb-1 font-bold" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default LabelInputTitle;
