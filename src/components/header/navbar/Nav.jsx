import React from 'react';
import styled from 'styled-components';


export const NavContainer = () => {
  return (
    <NavStyled>
      <div>
        <a href="#">Home</a>
      </div>
      <div>
        <a href="#">About Us</a>
      </div>
      <div>
        <a href="#">Contact Me</a>
      </div>

    </NavStyled>
  )
}

const NavStyled = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  gap: 40px;

  & a {
    color: white
  }
`

