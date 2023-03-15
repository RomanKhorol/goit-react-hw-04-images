import styled from '@emotion/styled';
export const Header = styled.header`
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
  height: 40px;
  position: sticky;
  top: 0;
  background-color: white;
  border-radius: 4px;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 40px;
  border-radius: 4px;
`;
export const Input = styled.input`
  width: 300px;
  height: 35px;
  outline: none;
  border: none;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
  border-radius: 4px;
`;
export const Button = styled.button`
  width: 100px;
  height: 40px;
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
  border-radius: 4px;
`;
