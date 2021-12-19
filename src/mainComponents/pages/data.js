import axios from 'axios'

export default async function (ID) {

  const data1 = {
    ID: ID
  }

  const data = {
    nickname: "test nick",
    currency: "$",
    password: "rayyaan123"
  }

  const getData = async () => {
    let res = await axios.post(`https://ServerMain.iamrf40.repl.co/test`, data1)
    console.log(res.data)
    return res
  }

   let res = await getData()
   data.nickname = res.data.nickname

    return data
  }

