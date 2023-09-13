import { useState } from "react"
import styled from "styled-components"
import AfterSubmitted from "./AfterSubmitted";

const BeforeSubmitted = () => {
  const [selectedRating, setSelectedRating] = useState<number>()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleRatingClicked = (rating: number) => {
    setSelectedRating(rating)
  };

  const handleFormSubmitted = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  };

  return ( isSubmitted ? <AfterSubmitted /> :
    <MainDiv onSubmit={handleFormSubmitted}>
      <h1>Rating is {selectedRating}</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        inventore nulla necessitatibus quos, eligendi similique.
      </p>

      <div>
        {[1, 2, 3, 4, 5].map((rating, index) => (
          <RaitingButton
            key={index}
            type="button"
            onClick={() => handleRatingClicked(rating)}
          >
            {rating}
          </RaitingButton>
        ))}
      </div>

      <SubmitButton disabled={selectedRating === undefined}>
        submit
      </SubmitButton>
    </MainDiv>
  );
};

export default BeforeSubmitted;

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

const RaitingButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  border: 2px solid gray;
  margin: 5px;
  cursor: pointer;
`;
const SubmitButton = styled.button`
  width: 70%;
  height: 30px;
  border-radius: 10px;
  font-size: 20px;
  border: 2px solid gray;
  cursor: pointer;
  margin: 10px;
`;

