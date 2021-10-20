import styled from '@emotion/styled';
import { StyledComponentProps } from '../global';

export type ItemNumberProps = {
  label: string;
  number: number;
}

const ItemNumberContainer = styled.div<StyledComponentProps>`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => `${theme.fontSizes.xxsmall}`};
  color: ${({ theme }) => `${theme.colors.description}`};
  
  .number {
    font-size: ${({ theme }) => `${theme.fontSizes.medium}`};
    font-weight: ${({ theme }) => `${theme.fontWeight.bold}`};
    color: ${({ theme }) => `${theme.colors.heading}`};    
  }
`;

const ItemNumber = ({ label, number }: ItemNumberProps) => {
  return (
    <ItemNumberContainer className="item">
      <label>{label}</label>
      <div className="number">{number}</div>
    </ItemNumberContainer>
  );
};

export default ItemNumber;
