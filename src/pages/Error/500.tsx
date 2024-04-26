import { Button, Result } from 'antd';
import React from 'react';

const App = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary" href='/'>Back Home</Button>}
  />
);

export default App;
