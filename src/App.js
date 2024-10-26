import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Импортируй Provider
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
import PrivateRoute from './Components/PrivateRoute'; // Import PrivateRoute
import Bonus from './Pages/Bonus';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
          <Route path='/contact' element={<Contact />} />
            <Route element={<WebLayout />}>
              <Route index element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/test' element={<Test />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/rating' element={<Rating />} />
              <Route path='/bonus' element={<PrivateRoute element={<Bonus/>}/>}/>
              <Route 
              path='/myResult' 
              element={
                <PrivateRoute element={<MyResult />}/>
              } 
            />
            <Route 
              path='/listening/:ID' 
              element={
                <PrivateRoute element={<Listening />} />} 
            />
            <Route 
              path='/reading/:ID' 
              element={
                <PrivateRoute element={<Reading />}/>} 
            />
            <Route 
              path='/writing/:ID' 
              element={
                <PrivateRoute element={<Writing />}/>} 
            />
            <Route 
              path='/speaking/:ID' 
              element={
                <PrivateRoute element={<Speaking />}/>
              } 
            />
        
            {/* Routes with individual authentication checks */}
          
          </Route>
          <Route 
              path='/book1/:ID' 
              element={
                <PrivateRoute element={<Book1 />}/>} 
            />
            </Route>

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
