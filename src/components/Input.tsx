import React from 'react';

interface Props {
  inputTitle: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputDynamic: React.FC<Props> = ({ inputTitle, value, handleChange }) => {
  return (
    <input
      type='text'
      placeholder={inputTitle}
      onChange={handleChange}
      value={value}
      name={inputTitle}
    />
  );
};
