import React from 'react';
import { AppWrapperStyled } from './AppWrapperStyles';


const AppWrapper = ({children}) => {
  return (
    <AppWrapperStyled>{children}</AppWrapperStyled>
  )
};

export default AppWrapper;