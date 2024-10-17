import { API_LOGIN } from "./apis"
import { axiosConfigure } from "./axios"

type UserLogin = {
  username: string,
  password: string,
}

const DefaultService = {
  async  postLogin(params: UserLogin) {
    const res: any = await axiosConfigure("POST", API_LOGIN, params)

    return res
  }
}

export default DefaultService