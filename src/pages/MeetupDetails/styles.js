import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
`;

export const MeetupHeader = styled.div`
  display: flex;

  h2 {
    width: 100%;
    color: #fff;
    font-weight: bold;
    font-size: 28px;
  }

  button {
    background: #d44059;
    border: 0;
    margin-left: 15px;
    border-radius: 4px;
    padding: 0 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 42px;
    color: #fff;
    font-weight: bold;

    svg {
      margin-right: 5px;
    }
  }

  .edit {
    background: #4dbaf9;
  }
`;
export const MeetupContent = styled.div`
  margin-top: 30px;

  img {
    display: block;
    max-width: 100%;
    max-height: 300px;
    margin: 0 auto;
    border-radius: 4px;
  }

  p {
    margin-top: 20px;
    color: #fff;
    font-size: 16px;
  }
`;
export const MeetupFooter = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;

  span {
    margin: auto 10px;
    color: #999;
  }
`;
