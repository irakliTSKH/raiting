
import styled from "styled-components"


const AfterSubmitted = () => {
  return (
    <MainDiv>
      <h1>Thank You </h1>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, at.</p>
    </MainDiv>
  );
};

export default AfterSubmitted

const MainDiv = styled.form`
  background: #3f3939;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 300px;
  border-radius: 20px;
  text-align: center;
`;
