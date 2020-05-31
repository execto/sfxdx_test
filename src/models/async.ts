export type AsyncState = {
  [asyncType: string]: {
    inProcess: boolean;
    error: boolean;
  };
};
