import { Btn } from './Button.styled';

const Button = ({ addPictures }) => (
  <Btn type="button" onClick={addPictures}>
    Add pictures
  </Btn>
);
export default Button;
