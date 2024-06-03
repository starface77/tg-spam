import { useSelector } from 'react-redux';
import ErrorPage from './components/ErrorPage';
import Header from './components/header/Header';
import MainPage from './components/main/MainPage';
import PanelPage from './components/panel/PanelPage';
import { SignIn, SignUp } from './components/sign/Sign';
import WindowControl from './components/windows/WindowControl';
import './styles.scss';
import { HashRouter, Route, Routes } from 'react-router-dom'
import MessagesPage from './components/messages/MessagesPage';
import HelpPage from './components/help_page/HelpPage';
import NewsPage from './components/news/NewsPage';
import ContactsPage from './components/contacts/ContactsPage';
import NewsItemPage from './components/news/NewsItemPage';
import HelpAnswers from './components/help_page/HelpAnswer';
import Helper from './components/helper/Helper';
import HelpMain from './components/help_page/HelpMain';
import Footer from './components/Footer/FooterItem';
import NewBlock from './components/Plans/NewBlock';

function App() {

  const status_window = useSelector(w => w.app.window_data.status)

  return (
    <HashRouter >
      <div className="container">
        {status_window ? <WindowControl /> : ""}
        <Header />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/news/:id" element={<NewsItemPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/panel" element={<PanelPage />} />
          <Route path="/panel/messages" element={<MessagesPage />} />
          <Route path='/answers' element={<HelpAnswers />} />
          <Route path='/helper' element={<Helper />} />
          <Route path='/help/#1' element={<HelpMain />} />
          <Route path='/plans' element={<NewBlock />} />

        </Routes>
      </div>
        <Footer />
    </HashRouter>
  );
}

export default App;
