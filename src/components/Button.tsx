import styled from '@emotion/styled';
import { ChildrenProp, MouseEventProp, StyledComponentProps } from '../global';
import { bps } from '../styles';

type ButtonProps = {
  children: ChildrenProp;
  type?: 'button' | 'reset' | 'submit' | undefined;
  onClick?: MouseEventProp;
}

const ButtonContainer = styled.button<StyledComponentProps>`
  color: ${({ theme }) => `${theme.colors.white}`};
  background-color: ${({ theme }) => `${theme.colors.primary}`};
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
  font-weight: ${({ theme }) => `${theme.fontWeight.bold}`};
  line-height: ${({ theme }) => `${theme.lineHeight.small}`};
  border-radius: ${({ theme }) => `${theme.borderRadius.medium}`};
  font-family: 'Space Mono';
  padding: 0 24px;
  min-height: 50px;
  border: none;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  ${bps.mobile} {
    font-size: ${({ theme }) => `${theme.fontSizes.xsmall}`};
  }
`;

const Button = ({ type = 'button', onClick, children }: ButtonProps) => {
  return (
    <ButtonContainer type={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
