import styled from '@emotion/styled';

const QuoteContainer = styled.div`
  height: 20rem;
  display: grid;
  place-content: center;

  @media (min-width: 1920px) {
    height: 30rem;
  }
`;

const ShowQuote = styled.div`
  background-color: var(--white);
  padding: 1rem;
  border-radius: 1rem;

  @media (min-width: 768px) {
    width: 50rem;
  }
`;

const Text = styled.h1`
  color: var(--black);
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Author = styled.p`
  color: var(--black);
  font-size: 0.85rem;
  font-style: italic;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Quote = ({ phrase }) => {
  const { quote, author } = phrase;

  return (
    <QuoteContainer>
      <ShowQuote>
        <Text>"{quote}"</Text>
        <Author>- {author}</Author>
      </ShowQuote>
    </QuoteContainer>
  );
};

export default Quote;
