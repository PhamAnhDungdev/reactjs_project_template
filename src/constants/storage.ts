
export const getToken = () => {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(`${tokenString}`);
  return userToken
}

export const setUserInfo = async (userInfo: object) => {
  localStorage.setItem("userInfo", JSON.stringify(userInfo))
  return true
}


export const getUserInfo = () => {
  try {
      const value = localStorage.getItem("userInfo")
      if (typeof value === "string") {
          return JSON.parse(value)
      }
      return ""
  } catch (error) {
      return ""
  }
}
