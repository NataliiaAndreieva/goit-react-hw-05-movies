import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 0 16px;
  flex-wrap: wrap;
`;

export const FormInput = styled.input`
  padding: 8px 12px;
  font-size: 21px;
  border: 2px solid black;
  border-radius: 3px;

`;

export const FormButton = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  border: 2px solid black;
  font-size: 21px;
  margin-left: 10px;
  border-radius: 3px;

  :hover {
    background-color: gray;
  }
`;
