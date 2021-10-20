import styled from '@emotion/styled';
import { User } from '../hooks/useLoadUser';
import PanelInfo from './PanelInfo';
import PanelNumbers from './PanelNumbers';
import PanelSocials from './PanelSocial';
import { ItemNumberProps } from './ItemNumber';
import { ItemIconProps } from './ItemIcon';
import { StyledComponentProps } from '../global';
import { bps } from '../styles';
import { userNumbersMapper, userSocialMapper } from '../utils/helpers';

type PanelUserProps = {
  user: User;
}

const PanelUserContainer = styled.div<StyledComponentProps>`
  height: inherit;
  padding: 44px 48px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${bps.mobile} {
    padding: 32px 24px;
  }
`;

const PanelUser = ({ user }: PanelUserProps) => {
  const numbers: Array<ItemNumberProps> | null = userNumbersMapper(user);
  const socials: Array<ItemIconProps> | null = userSocialMapper(user);

  if (!user) {
    return null;
  }

  return (
    <PanelUserContainer>
      <PanelInfo {...user} />
      {numbers && <PanelNumbers items={numbers} />}
      {socials && <PanelSocials items={socials} />}
    </PanelUserContainer>
  );
};

export default PanelUser;
