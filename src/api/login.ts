import axios from "axios";

interface LoginData {
  phone: string
  password: string
}
interface Data {
  code: number,
  data: LoginRes
  message: string
  ok: boolean
}

interface LoginRes {
  nickName: string
  name: string
  userId: number
  token: string
}

export default {
  login: ({ phone, password }: LoginData) => axios.post<any, Data>('http://sph-h5-api.atguigu.cn/api/user/passport/login', {
    phone,
    password
  })
}