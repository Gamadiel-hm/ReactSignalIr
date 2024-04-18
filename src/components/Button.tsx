import Button from '@mui/material/Button';

interface Props {
  buttonTitle: string;
  type: string;
}

export const ButtonDynamic: React.FC<Props> = ({ buttonTitle, type }) => {
  return (
    <Button
      type='submit'
      variant='outlined'
      typeof={type}>
      {buttonTitle}
    </Button>
  );
};
