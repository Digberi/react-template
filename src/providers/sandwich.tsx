import { CFC } from "@types";
import { Fragment } from "react";

export const Sandwich: CFC = ({children}) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}