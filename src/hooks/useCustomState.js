function useCustomState(initialValue) {
  const state = {
    value: initialValue,
  };

  const setState = (newValue) => {
    state.value = newValue;
  };

  return [state, setState];
}

export default useCustomState;
