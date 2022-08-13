import {ChangeEvent, ReactNode, useEffect, useState} from 'react';
import { SlowComponent } from '../slowComponent/SlowComponent';

type Example_4PropsType = {
    children: ReactNode
}

export const Example_4 = (props: Example_4PropsType) => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

  return (
    <div>
      <div>Lags when change value</div>
      <input type="text" value={value} onChange={onChange} />
        {props.children}
    </div>
  );
};
