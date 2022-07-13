import styled from "styled-components";

const StyledSlide = styled.div`
  position: absolute;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  text-align: center;
  opacity: ${({ active }) => active ? 1 : 0};
`;

const Text = styled.p`
  color: white;
  margin: 0;
`;

const Slide = ({ text, author, active }) => {
  return (
    <StyledSlide active={active}>
      <Text>{text}</Text>
      <Text>- {author}</Text>
    </StyledSlide>
  );
}

export default Slide;