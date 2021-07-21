import styled from 'styled-components';

const MainNavigation = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  background-color: #2aa2db;

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin:8px 15px;

    ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-items: center;

      li {
        display: block;
        list-style: none;
        font-size: 15px;
        padding: 6px 10px;

        a {
          text-decoration: none;
          cursor: pointer;
          color:#fff;
          font-family: Verdana, sans-serif;
        }
      }
    }
  }
`;
export default MainNavigation;
