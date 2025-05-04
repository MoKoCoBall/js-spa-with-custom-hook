function useCustomRef(initialValue) {
  const ref = {
    current: initialValue,
  };

  return ref;
}

export default useCustomRef;
