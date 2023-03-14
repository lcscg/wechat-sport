/*
 * @Author: lcs
 * @Date: 2023-01-06 14:17:48
 * @LastEditors: lcs
 * @LastEditTime: 2023-03-14 11:08:07
 * @Description: file content
 */
const axios = require("axios");

async function sport() {
  const res = await axios({
    url: "https://api.kit9.cn/api/xiaomi_sports/api.php",
    method:'post',
    params: {
      mobile: "159********", //小米运动手机账号
      password: "password", //小米运动密码
      step: "28888",//运动步数
    },
  });
  // 微信推行消息。可有可无。。。
  handlePush(res.data.data.state);
}

async function handlePush(desp) {
    console.log(desp);
  const body = {
    token: `******************`, //pushplus，token
    title: `运动步数`,
    content: `${desp}`,
  };
  const res = await axios({ url: 'http://www.pushplus.plus/send', method: "post", params: body });
  console.log(res.data);
}

exports.handler = async (event, context, callback) => {
  sport();
};
