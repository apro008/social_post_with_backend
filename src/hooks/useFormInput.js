import {useState} from 'react';

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChangeText = e => {
    setValue(e);
  };

  return {
    value,
    onChangeText,
  };
};

export default useFormInput;
