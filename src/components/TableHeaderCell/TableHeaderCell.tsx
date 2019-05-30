import * as React from "react";

import { Merge, TableHeaderCellProps } from "./TableHeaderCell.type";

const TableHeaderCell: React.FC<TableHeaderCellProps | {}> = ({
  className,
  onClick,
  columnName
}: Merge<TableHeaderCellProps, {}>) => {
  if (columnName && columnName && onClick) {
    return (
      <div className={className}>
        <p onClick={onClick}>{columnName}</p>
      </div>
    );
  }

  return (
    <div>
      <p />
    </div>
  );
};

export default TableHeaderCell;
