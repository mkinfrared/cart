import { SyntheticEvent } from "react";

export interface TableHeaderCellProps {
  columnName: string;
  className: string;
  onClick: (e: SyntheticEvent) => void;
}

export type Merge<T1, T2> = Pick<T1, Extract<keyof T1, keyof T2>> &
  Pick<T2, Extract<keyof T2, keyof T1>> &
  Partial<T1 & T2>;
