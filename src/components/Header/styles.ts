import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;

`;

export const Logo = styled.div`
  width: 120px;
`;

export const Nav = styled.nav`
  display: flex;
  padding: 0.75rem 1.5rem;

  > li {
    list-style: none;
    padding: 0.75rem 1.5rem;
  }

  a {
    text-decoration: none;
  }
`;


