import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.style';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map(el => {
        return (
          <Button key={el} type="button" onClick={() => onLeaveFeedback(el)}>
            {el}
          </Button>
        );
      })}
    </Container>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
