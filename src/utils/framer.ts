export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 0.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    };
  },
};

export const drawWin = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    };
  },
};
