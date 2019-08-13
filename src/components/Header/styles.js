import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin-right: 15px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    background: #d44059;
    border: 0;
    margin-left: 15px;
    border-radius: 4px;
    width: 71px;
    height: 42px;
    color: #fff;
    font-weight: bold;
  }
`;
