import { setUserInfo } from "@constants/storage";
import Card from "@helpers/Card/Card";
import CardTitle from "@helpers/Card/CardTitle";
import DefaultService from "@services/default";
import { Button, Pane, TextInput, toaster } from "evergreen-ui";
import { useState } from "react";

const Login = (props: any) => {
  const { setToken } = props;

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  //* handler
  const handleChange = (key: string, value: string) => {
    switch (key) {
      case "username":
        setUser({ ...user, username: value });
        break;
      case "password":
        setUser({ ...user, password: value });
        break;
      default:
        break;
    }
  };

  const handleLogin = async () => {
    if (user.username && user.password) {
      try {
        const res = await DefaultService.postLogin(user);

        if (res?.data?.success) {
          setToken(res?.data?.data?.token);
          setUserInfo(res?.data?.data?.user);
        } else {
          toaster.danger(res?.response?.data?.message || "Lỗi");
        }
        console.log(res)
      } catch (error: any) {
        toaster.danger("ERROR!")
      }
    } else {
      toaster.warning("Vui lòng nhập đầy đủ thông tin");
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Card width={400} style={{ alignItems: "center" }}>
        <CardTitle>DEV.TOPSIM.VN</CardTitle>
        <Pane className="mb-4">
          <TextInput
            name="username"
            placeholder="Username"
            value={user?.username}
            onChange={(e: any) => handleChange("username", e.target.value)}
          />
        </Pane>
        <Pane className="mb-4">
          <TextInput
            type="password"
            name="password"
            placeholder="Password"
            value={user?.password}
            onChange={(e: any) => handleChange("password", e.target.value)}
          />
        </Pane>
        <Pane className="mb-4">
          <TextInput name="OTP" placeholder="OTP" />
        </Pane>
        <Pane className="flex flex-row justify-center gap-4">
          <Button appearance="primary" intent="primary" onClick={handleLogin}>
            Đăng nhập
          </Button>
          <Button appearance="primary" intent="success">
            Lấy OTP
          </Button>
        </Pane>
      </Card>
    </div>
  );
};

export default Login;
