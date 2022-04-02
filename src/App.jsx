import Logo from './breaking-bad-logo.svg';
import styled from '@emotion/styled';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BreakingBadLogo = styled.img`
  max-width: 100%;
`;

function App() {
  return (
    <>
      <LogoContainer>
        <BreakingBadLogo src={Logo} alt="breaking bad logo" />
      </LogoContainer>
    </>
  );
}

export default App;
