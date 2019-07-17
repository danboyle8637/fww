const useIsBackgroundReady = backgroundObject => {
  const length = Object.keys(backgroundObject).length;
  return length > 0;
};

export default useIsBackgroundReady;
