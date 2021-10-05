import styled from '@emotion/styled';
import ItemNumber, { ItemNumberProps } from './ItemNumber';
import { StyledComponentProps } from '../global';
import { bps } from '../styles';

interface PanelNumbersProps {
  items?: Array<ItemNumberProps>;
}

const PanelNumbersContainer = styled.div<StyledComponentProps>`
  background-color: ${({ theme }) => `${theme.bgColors.primary}`};
  border-radius: ${({ theme }) => `${theme.borderRadius.medium}`};
  min-height: 85px;
  display: flex;
  align-items: center;
  margin: 32px 0 0 154px;
  padding: 0 32px;

  .item + .item {
    margin-left: 80px;
  }

  ${bps.mobile} {
    justify-content: center;
    margin: 33px 0 0;
    padding: 0 20px;
    gap: 20px;
    
    .item {
      text-align: center;
      margin-left: 0 !important;
    }
  }
`;

const PanelNumbers = ({ items }: PanelNumbersProps) => {
  if (!items) {
    return null;
  }

  return (
    <PanelNumbersContainer>
      {items.map((item: ItemNumberProps) => (
        <ItemNumber key={item.label} {...item} />
      ))}
    </PanelNumbersContainer>
  );
};

export default PanelNumbers;
