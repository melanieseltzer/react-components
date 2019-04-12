import React, { ReactElement } from 'react';

interface Props {
  name: string;
}

const HelloWorld = ({ name }: Props): ReactElement<any> => (
  <div>Hello {name}!</div>
);

export default HelloWorld;
