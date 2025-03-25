import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { useEffect } from 'react';

import AppLayout from './layouts/AppLayout';
import WebLayout from './layouts/WebLayout';
import Home from './Pages/Home';
import store from './Redux/store';
import './Style/Media.css';
import './App.css';
import Login from './Pages/Login';
import Test from './Pages/Test';
import Contact from './Pages/Contact';
import FAQ from './Pages/FAQ';
import Rating from './Pages/Rating';
import Book1 from './Components/Books/Book1/Book1';
import MyResult from './Pages/MyResult';
import Listening from './Components/Result/Listening';
import Reading from './Components/Result/Reading';
import Writing from './Components/Result/Writing';
import Speaking from './Components/Result/Speaking';
import PrivateRoute from './Components/PrivateRoute';
import Bonus from './Pages/Bonus';
import Book2 from './Components/Books/Book2/Book2';
import MultiLevel from './Pages/MultiLevel';
import Exam from './Components/Multi-Level/Exam';
import Payment from './Pages/Payment';
import CefrListening from './Components/Result/CefrListening';

function App() {
  // useEffect(() => {
  //   // Инициализация Яндекс Метрики
  //   (function (m, e, t, r, i, k, a) {
  //     m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
  //     m[i].l = 1 * new Date();
  //     k = e.createElement(t);
  //     a = e.getElementsByTagName(t)[0];
  //     k.async = 1;
  //     k.src = r;
  //     a.parentNode.insertBefore(k, a);
  //   })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  //   // Инициализация счётчика
  //   if (window.ym) {
  //     window.ym(98863503, "init", {
  //       clickmap: true,
  //       trackLinks: true,
  //       accurateTrackBounce: true,
  //       webvisor: true
  //     });
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route element={<WebLayout />}>
              <Route index element={<Home />} />
              <Route path='/multi-level' element={<MultiLevel />} />
              <Route path='/login' element={<Login />} />
              <Route path='/payment' element={<Payment />} />

              <Route path='/test' element={<Test />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/rating' element={<Rating />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/bonus' element={<PrivateRoute element={<Bonus />} />} />
              <Route path='/myResult' element={<PrivateRoute element={<MyResult />} />} />
              <Route path='/listening/:ID' element={<PrivateRoute element={<Listening />} />} />
              <Route path='/reading/:ID' element={<PrivateRoute element={<Reading />} />} />
              <Route path='/writing/:ID' element={<PrivateRoute element={<Writing />} />} />
              <Route path='/speaking/:ID' element={<PrivateRoute element={<Speaking />} />} />

              <Route path='/cefr/listening/:ExamID/:SectionID' element={<CefrListening/>}/>

            </Route>
            <Route path='/book1/:ID' element={<PrivateRoute element={<Book1 />} />} />
            <Route path='/multi-level/exam/:ID' element={<Exam />} />
          </Route>
          <Route path='/book2/:ID' element={<PrivateRoute element={<Book2 />} />} />
        </Routes>
      </Router>

      {/* Поддержка пользователей с отключенным JavaScript */}
      {/* <noscript>
        <div>
          <img src="https://mc.yandex.ru/watch/98863503" style={{ position: "absolute", left: "-9999px" }} alt="" />
        </div>
      </noscript> */}
    </Provider>
  );
}

export default App;
