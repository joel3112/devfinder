import styled from '@emotion/styled'
import { ChangeEventProp, StyledComponentProps } from '../global';
import { bps } from '../styles';

interface InputProps {
  name: string;
  placeholder: string;
  onChange: ChangeEventProp;
  value?: string | number | readonly string[] | undefined;
  icon?: string;
};

const InputContainer = styled.input<StyledComponentProps>`
  color: ${({ theme }) => `${theme.colors.description}`};
  font-size: ${({ theme }) => `${theme.fontSizes.medium}`};
  font-weight: ${({ theme }) => `${theme.fontWeight.regular}`};
  line-height: ${({ theme }) => `${theme.lineHeight.medium}`};
  font-family: 'Space Mono';
  background-color: transparent;
  height: 48px;
  width: 100%;
  padding: 0 14px 0 8px;
  border: none;
  outline: none;

  ::placeholder {
    opacity: .6;
    color: currentColor;
  }

  ${bps.mobile} {
    font-size: ${({ theme }) => `${theme.fontSizes.xxsmall}`};
  }
`;

const Input = ({ name, value, placeholder, onChange }: InputProps) => {
  return (
    <InputContainer
      name={name}
      placeholder={placeholder}
      autoComplete="off" 
      onChange={onChange} 
      value={value} >
    </InputContainer>
  )
};

export default Input;
