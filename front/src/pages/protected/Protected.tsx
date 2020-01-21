import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import FadeInEntrance from '../../components/fadeInEntrance';

type OwnProps = {};
type Props = RouteComponentProps & OwnProps;

function Protected({}: Props) {
  return (
    <FadeInEntrance>
      <h1>Protected view</h1>
      <h3>If you can read, it means you are authenticated</h3>
    </FadeInEntrance>
  );
}

Protected.displayName = 'Protected';

export default Protected;
