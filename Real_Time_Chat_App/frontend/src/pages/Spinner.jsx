import styled from "styled-components";

const SpinnerData = styled.div`
  border: 6px solid white;
  border-top: 6px blue solid;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Spinner() {
  return (
    <div>
      <SpinnerData />
    </div>
  );
}
