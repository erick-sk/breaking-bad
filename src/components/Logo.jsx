import BreakingBadLogo from '../breaking-bad-logo.svg';
import styled from '@emotion/styled';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;

  img {
    max-width: 100%;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <img src={BreakingBadLogo} alt="breaking bad logo" />
    </LogoContainer>
  );
};

export default Logo;
