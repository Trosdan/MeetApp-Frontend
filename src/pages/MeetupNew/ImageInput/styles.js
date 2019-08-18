import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  align-self: center;
  margin-bottom: 30px;

  label {
    width: 100%;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      max-width: 100%;
      max-height: 300px;
      border-radius: 4px;
    }

    .ImageInput {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100px;
      max-height: 300px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.1);
    }

    input {
      display: none;
    }
  }
`;
