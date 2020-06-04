export const capitalize = (str: string) => {
  if (!str) {
    return '';
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getClasses = (classes): string => {
  let classNames: string[] = [];

  const copyClasses = { ...classes };

  if (copyClasses.externalClasses) {
    classNames = [...classNames, ...copyClasses.externalClasses];
    delete copyClasses.externalClasses;
  }

  const computedClasses = Object.keys(copyClasses).reduce(
    (acc: string[], cls) => {
      if (copyClasses[cls]) {
        return [...acc, cls];
      }
      return acc;
    },
    []
  );

  return [...classNames, ...computedClasses].filter((cls) => cls).join(' ');
};
