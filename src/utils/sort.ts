export type order = "ASC" | "DESC";

const desc = <T, U extends keyof T>(a: T, b: T, orderBy: U) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
};

export const stableSort = <T>(
  array: T[],
  compareFunc: ReturnType<typeof getSorting>
) => {
  const stabilizedThis: [T, number][] = array.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = compareFunc(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  return stabilizedThis.map(el => el[0]);
};

export const getSorting = (order: order, orderBy: string) => {
  return order === "DESC"
    ? (a: any, b: any) => desc(a, b, orderBy)
    : (a: any, b: any) => -desc(a, b, orderBy);
};
