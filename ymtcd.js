
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `http://api.medlive.cn/user/checkin_project/check_in.php?user_id=1212332&project_name=dic_pc`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate`,
'Cookie' : `ymtinfo=eyJhcHBfbmFtZSI6ImRpY19pcGhvbmUiLCJ1aWQiOiIxMjEyMzMyIiwiZXh0X3ZlcnNpb24iOiIx%0D%0AIiwicmVzb3VyY2UiOiJhcHAifQ==%0D%0A; sid=69qtk0hoosafpi9d1apkib6ac3`,
'Connection' : `keep-alive`,
'Accept' : `*/*`,
'Host' : `api.medlive.cn`,
'User-Agent' : `MedDic2011/4.7.3.1 CFNetwork/1404.0.5 Darwin/22.3.0`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
