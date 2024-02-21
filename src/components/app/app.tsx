import MainScreen, {type MainScreenProps} from '../../pages/main-screen/main-screen';

type AppProps = MainScreenProps;

function App({resultCount}: AppProps) {
  return (
    <MainScreen resultCount={resultCount} />
  );
}

export default App;
