import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  nav {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
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
`;

export const MeetupList = styled.div`
  display: block;
  margin-top: 30px;
  align-items: center;

  div {
    padding: 0 30px;
    display: flex;
    width: 100%;
    height: 64px;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    margin-bottom: 10px;

    cursor: pointer;

    h3 {
      font-size: 18px;
      color: #fff;
    }

    h4 {
      font-size: 14px;
      font-weight: normal;
      flex: 1;
      padding-right: 30px;
      text-align: end;
      color: #999;
    }

    &:hover {
      background: ${darken(0.01, 'rgba(0, 0, 0, 0.5)')};
    }
  }
`;
