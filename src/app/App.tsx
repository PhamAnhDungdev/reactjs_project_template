/* eslint-disable react-hooks/exhaustive-deps */
import Login from "@components/Default/Login";
import Layout from "@layout/Layout";
import Router from "@router/Router";
import "@scss/App.scss";
import { Suspense, useEffect } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../utils/hooks/useToken";

function App() {
  const { token, setToken } = useToken();

  const location = useLocation()
  const navigate = useNavigate()

  const path = location.pathname

  useEffect(() => {
    if(token) {
      navigate(path)
    }
  }, [])

  if (!token) return <Login setToken={setToken} />;

  return (
    <Suspense fallback={null}>
      <ProSidebarProvider>
        <Layout>
          <Router />
        </Layout>
      </ProSidebarProvider>
    </Suspense>
  );
}

export default App;
