import styled from '@emotion/styled';
import { StyledComponentProps } from '../global';
import Avatar from './Avatar';

type PanelResultProps = {
  message: string;
  image?: string;
  error?: boolean;
}

const PanelResultContainer = styled.div<StyledComponentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
  font-weight: ${({ theme }) => `${theme.fontWeight.bold}`};
  color: ${({ theme }) => `${theme.colors.description}`};
  
  .error {
    color: ${({ theme }) => `${theme.colors.error}`};
  }
`;

const PanelResult = ({ message, image, error }: PanelResultProps) => {
  return (
    <PanelResultContainer>
      <Avatar image={image || '/assets/user.png'} size={100} />
      {message && <p className={error ? 'error' : ''}>{message}</p>}
    </PanelResultContainer>
  );
};

export default PanelResult;
