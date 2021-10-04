import { ChangeEvent, useState } from 'react';
import { ChangeEventProp, UnknownObject } from '../global';

export type UseForm = [
  values: UnknownObject, 
  handleInputChange: ChangeEventProp, 
  reset?: () => void
];

export type UseFormHook = (initialState: UnknownObject) => UseForm;

export const useForm: UseFormHook = (initialState: UnknownObject = {}) => {
  const [values, setValues] = useState<UnknownObject>(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
