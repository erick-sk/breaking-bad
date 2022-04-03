import styled from '@emotion/styled';

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 3rem;
  }
`;

const GetPhrase = styled.button`
  background: rgb(0, 125, 53);
  background: linear-gradient(
    135deg,
    rgba(0, 125, 53, 1) 0%,
    rgba(5, 111, 62, 1) 70%,
    rgba(13, 92, 75, 1) 100%
  );
  color: var(--white);
  font-size: 1rem;
  text-align: center;
  width: 10rem;
  padding: 1rem 0;
  border: 2px solid var(--black);
  border-radius: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    width: 15rem;
    font-size: 1.5rem;
  }
`;

const Button = ({ callingTheApi }) => {
  return (
    <Container>
      <GetPhrase onClick={() => callingTheApi()} type="button">
        Get Phrase
      </GetPhrase>
    </Container>
  );
};

export default Button;
