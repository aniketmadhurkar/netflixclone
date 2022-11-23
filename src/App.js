
import './App.css';
import Nav from './components/nav/nav';
import Header from './components/header/header';
import Content from './components/content/content';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '', // ! Add your API key here
};

const App = () => {
  return (
    <div>
      {/* Nav Component */}
      <Nav />
      {/* Header background image with buttons and title */}
      <Header />
      {/* Content with movies */}
      <Content />
    </div>
  );
};

export default App;

