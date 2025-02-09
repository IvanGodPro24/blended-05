import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import ExchangeForm from '../components/ExchangeForm/ExchangeForm';
import ExchangeInfo from '../components/ExchangeInfo/ExchangeInfo';
import { useSelector } from 'react-redux';
import { selectExchageInfo } from '../redux/currency/selectors';

const Home = () => {
  const exchangeInfo = useSelector(selectExchageInfo);

  const isError = false;

  return (
    <Section>
      <Container>
        <Heading info title="What currencies do you want to exchange?🙂" />
        <ExchangeForm />
        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
