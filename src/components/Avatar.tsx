import styled from '@emotion/styled';
import { StyledComponentProps } from '../global';

interface AvatarProps {
  image: string;
  size?: number;
}

const AvatarContainer = styled.img<StyledComponentProps>`
  width: ${({ size }) => `${size}px`};
  min-width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
`;

const Avatar = ({ image, size = 20 }: AvatarProps) => {
  return <AvatarContainer className="avatar" src={image} size={size} />;
};

export default Avatar;
