import { useState } from 'react';
import { ButtonDynamic } from './Button';
import { InputDynamic } from './Input';

interface Props {
  connectionSignal: (username: string, chatRoom: string) => void;
}

interface FormDto {
  message: string;
  group: string;
}

const initialForm: FormDto = {
  message: '',
  group: ''
};

export const FormJoin: React.FC<Props> = ({ connectionSignal }) => {
  const [data, setData] = useState<FormDto>(initialForm);

  const HandlerFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formMessage = Object.fromEntries(new window.FormData(e.currentTarget));
    const { message, group } = formMessage;
    connectionSignal(String(message), String(group));
  };

  const handleSetInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name in initialForm) setData({ ...data, [e.currentTarget.name]: e.target.value });
  };

  return (
    <form
      className='form-send'
      onSubmit={HandlerFormSubmit}>
      <InputDynamic
        inputTitle='message'
        handleChange={handleSetInputs}
        value={data.message}
      />
      <InputDynamic
        inputTitle='group'
        handleChange={handleSetInputs}
        value={data.group}
      />
      <ButtonDynamic
        buttonTitle='Join Group'
        type={'submit'}
      />
    </form>
  );
};
