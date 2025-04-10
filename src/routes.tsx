import { Route, Routes } from "react-router";
import Layout from "./pages/authentication/layout";
import ScreenPrivacy from "./pages/authentication/screen-privacy";
import ScreenTermsCondition from "./pages/authentication/screen-terms";
import ScreenEmailVerification from "./pages/authentication/screen-email-verification";
import ScreenOtpVerification from "./pages/authentication/screen-otp-verification";
import ScreenLanding from "./pages/authentication/screen-landing";
import ScreenLogin from "./pages/authentication/screen-login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ScreenLanding />} />
      <Route path="/" element={<Layout />}>
        {/* <Route index={true} element={<IndexPage />} /> */}
        <Route path="login" element={<ScreenLogin />} />
        <Route path="verify-email" element={<ScreenEmailVerification />} />
        <Route path="verify-otp" element={<ScreenOtpVerification />} />
        <Route path="privacy-policy" element={<ScreenPrivacy />} />
        <Route path="terms-condition" element={<ScreenTermsCondition />} />
      </Route>
    </Routes>
  );
}

export default App;
