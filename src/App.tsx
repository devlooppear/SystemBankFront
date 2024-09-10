import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import TransactionPage from "./pages/TransactionPage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";
import TransactionDetailPage from "./pages/TransactionDetailPage";
import UserProfilePage from "./pages/UserProfilePage";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="transaction" element={<TransactionPage />} />
          <Route path="history" element={<TransactionHistoryPage />} />
          <Route path="transaction/:id" element={<TransactionDetailPage />} />
          <Route path="profile" element={<UserProfilePage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
