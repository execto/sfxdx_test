const useThrottle = (callback: (value: any) => void) => {
  let prevTimerId: NodeJS.Timeout;

  const throttle = (value: any) => {
    if (prevTimerId) {
      clearTimeout(prevTimerId);
    }
    prevTimerId = setTimeout(() => {
      callback(value);
    }, 1200);
  };

  return throttle;
};

export default useThrottle;
