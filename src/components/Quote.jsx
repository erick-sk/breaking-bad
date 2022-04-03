import styled from '@emotion/styled';
import Button from './Button';

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;

  @media (min-width: 1920px) {
    margin-top: 10rem;
  }
`;

const ShowQuote = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: var(--white);
  border-radius: 1rem;

  @media (min-width: 1024px) {
    width: 60rem;
  }
`;

const Text = styled.h1`
  margin: 0;
  color: var(--black);
  font-size: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Author = styled.p`
  margin: 0;
  color: var(--black);
  text-align: center;
  font-size: 0.85rem;
  font-style: italic;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Quote = ({ phrase, callingTheApi }) => {
  const { quote, author } = phrase;

  return (
    <QuoteContainer>
      <ShowQuote>
        <Text>"{quote}"</Text>
        <Author>- {author}</Author>
      </ShowQuote>

      <Button callingTheApi={callingTheApi} />
    </QuoteContainer>
  );
};

export default Quote;
