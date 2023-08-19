import React from 'react';

import {InputContainer} from './styles';

 function  Inputx({value, onChange}) {
    return (
      <InputContainer>
      <input value={value} onChange={onChange}/>
      </InputContainer>  
    )
}
export default Inputx;