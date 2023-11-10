import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import { history } from './utils/history';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Login from './pages/Login';
import Register from './pages/Register';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import Home from './pages/Home';
import InforUser from './pages/InforUser';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import AboutApp from './pages/AboutApp';
import News from './pages/News';
import BookingTicket from './pages/BookingTicket';
import LoadingPage from './pages/LoadingPage';

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="inforUser" element={<InforUser />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="aboutapp" element={<AboutApp />} />
          <Route path="news" element={<News />} />
          <Route path="booking/:id" element={<BookingTicket />} />
        </Route>
        <Route path="/admin" element={<AdminTemplate />}></Route>
      </Routes>
    </HistoryRouter>
  );
}
export default App;
