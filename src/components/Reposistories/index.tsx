import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationsState } from './../../store';

import { loadRequest } from './../../store/ducks/repositories/actions';
// https://api.github.com/users/uandersonmbc/repos
const Repositories: React.FC = () => {
  const test = useSelector((state: ApplicationsState) => state.repositories);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(test);
  }, [test]);
  return (
    <div>
      {test.data.map((repor) => (
        <p key={repor.id}>{repor.name}</p>
      ))}
      <button onClick={() => dispatch(loadRequest())}>Teste</button>
    </div>
  );
};

export default Repositories;
