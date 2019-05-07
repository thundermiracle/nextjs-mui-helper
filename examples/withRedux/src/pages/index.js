import React from 'react';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Counter from '../client/components/Counter';
import withRedux from '../client/hoc/withRedux';

const Page1 = () => (
  <div>
    <Counter />
    <div>
      <Link href="/page2">
        <Button>To Page2</Button>
      </Link>
    </div>
  </div>
);

export default withRedux(Page1);
