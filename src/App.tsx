import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'app/pages/Home';
import About from 'app/pages/About';
import Test from 'app/pages/Test';
import Nopage from 'app/pages/Nopage';
import ScrollToTop from 'app/components/explore/ScrollToTop';
import Explore from 'app/pages/Explore';
import Investor from 'app/pages/Investor';
import SignUp from 'app/pages/SignUp';
import LoginForm from 'app/components/login/Login';
import Dashboard from 'app/pages/dashboard/Dashboard';
import PersistLogin from 'app/components/auth/PersistLogin';
import RequireAuth from 'app/components/auth/RequireAuth';
import CreateProject from './app/pages/dashboard/CreateProjectPage';
import SingleProjectPage from 'app/pages/dashboard/SingleProjectPage';
import Teams from 'app/pages/Teams';
import CodeOfConduct from 'app/pages/CodeOfConduct';
import ProfileEdit from 'app/pages/dashboard/Editproject';
import AllSet from 'app/pages/dashboard/AllSet';
import Faqs from 'app/pages/Faqs';
import Contact from 'app/pages/Contact';
import Wallet from 'app/pages/dashboard/Wallet';
import GoogleAuth from 'app/pages/oauth/GoogleAuth';
import FacebookAuth from 'app/pages/oauth/FacebookAuth';
import UserProfile from 'app/pages/UserProfile';
import EmailConfirmationPage from 'app/pages/EmailConfirmationPage';
import Creatives from 'app/pages/Creatives';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/" element={<Home />} />
          <Route path="/corporate-profile" element={<About />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/projects/:id" element={<SingleProjectPage />} />
          <Route path="/user-profile/:id" element={<UserProfile />} />
          <Route path="/investors" element={<Investor />} />
          <Route path="/creatives" element={<Creatives />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/google/oauthcallback" element={<GoogleAuth />} />
          <Route path="/facebook/oauthcallback" element={<FacebookAuth />} />
          <Route
            path="/email-confirmation/:token"
            element={<EmailConfirmationPage />}
          />
          <Route path="/test" element={<Test />} />

          {/* {CATCH ALL ROUTE} */}
          <Route path="*" element={<Nopage />} />

          {/* PROTECTED ROUTES */}
          {/* <Route element={<PersistLogin />}> */}
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/create-project"
              element={<CreateProject />}
            />
            <Route path="/dashboard/edit-profile" element={<ProfileEdit />} />
            <Route path="/dashboard/wallet" element={<Wallet />} />
            <Route path="/success" element={<AllSet />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
