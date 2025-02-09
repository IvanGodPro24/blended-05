import { Wave } from 'react-animated-text';

import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectBaseCurrency,
  selectFilteredRates,
} from '../redux/currency/selectors';
import { fetchRates } from '../redux/currency/operations';
import RatesList from '../components/RatesList/RatesList';
import Filter from '../components/Filter/Filter';

const Rates = () => {
  const dispatch = useDispatch();

  const currency = useSelector(selectBaseCurrency);

  const rates = useSelector(selectFilteredRates);

  const isError = false;

  useEffect(() => {
    dispatch(fetchRates(currency));
  }, [dispatch, currency]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${currency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />

        <Filter />

        {rates.length > 0 && <RatesList rates={rates} />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
