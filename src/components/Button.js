import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const StyledButton = styled.button`
  border: 0;
  background-color: white;
  padding: 5px;
  cursor: pointer;
  font-size: 1.5rem;
  order: 1;

  @media (min-width: 450px) {
    order: 0;
  }
`;

const Button = ({ type, moveSlide }) => {
  return (
    <StyledButton onClick={() => moveSlide(type)}>
      <FontAwesomeIcon icon={type === "left" ? faAngleLeft : faAngleRight} />
    </StyledButton>
  );
}

export default Button;