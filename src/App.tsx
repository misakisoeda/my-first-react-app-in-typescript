import React from 'react';

interface AppProps {
  message?: string;
}

// const App = ({ message }: { message: string }) => {  //→再利用できないので、interfaceを作成して、下記で対応
// const App = ({ message }: AppProps) => {  //→ランライム中にエラーが発生する
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return <div>{ message }</div>;
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
}

export default App;

// 結論：関数に対して、型制約（アノテーション）を行いましょう　React.FunctionComponent＋ジェネリクスでpropsをしてあげましょう！