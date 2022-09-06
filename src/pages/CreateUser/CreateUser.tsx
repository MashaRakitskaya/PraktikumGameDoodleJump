import React, { useState } from 'react';
import ChangePassword from '../ChangeData/ChangePassword/ChangePassword';
import ChangetData from '../ChangeData/ChangePersonData/ChangetData';
import { Wrapper, Changet } from './create-user.styles';

const CreateUser = () => {
  const [flag, setFlag] = useState<string>('Сhange user data');
  return (
    <Wrapper>
      <div style={{ display: 'flex', gap: '25px' }}>
        <Changet onClick={() => setFlag('Сhange user data')}>
          Сhange user data
        </Changet>
        <Changet onClick={() => setFlag('Change password')}>
          Change password
        </Changet>
      </div>
      {flag === 'Сhange user data' ? <ChangetData /> : <ChangePassword />}
    </Wrapper>
  );
};

export default CreateUser;
