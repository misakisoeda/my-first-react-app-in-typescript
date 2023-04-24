import React from 'react';

interface AppProps {
  message: string;
}

// const App = ({ message }: { message: string }) => {  //→再利用できないので、interfaceを作成して、下記で対応
const App = ({ message }: AppProps) => {
  return <div>{ message }</div>;
};

export default App;
