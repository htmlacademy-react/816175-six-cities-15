import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  resultCount: number;
}

function App(props: AppProps) {
  return (
    <MainScreen resultCount={props.resultCount} />
  );
}

export default App;
