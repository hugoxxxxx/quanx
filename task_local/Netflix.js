const BASE_URL = 'https://www.netflix.com/title/'

const FILM_ID = 81215567
const link = { "media-url": "https://raw.githubusercontent.com/erdongchanyo/icon/main/Policy-Filter/Netflix.png" } 
const policy_name = "๐บ Netflix" //ๅกซๅฅไฝ ็ youtube ็ญ็ฅ็ปๅ

const arrow = "โ"
var output = ""

var flags = new Map([[ "AC" , "๐ฆ๐จ" ] , [ "AF" , "๐ฆ๐ซ" ] , [ "AI" , "๐ฆ๐ฎ" ] , [ "AL" , "๐ฆ๐ฑ" ] , [ "AM" , "๐ฆ๐ฒ" ] , [ "AQ" , "๐ฆ๐ถ" ] , [ "AR" , "๐ฆ๐ท" ] , [ "AS" , "๐ฆ๐ธ" ] , [ "AT" , "๐ฆ๐น" ] , [ "AU" , "๐ฆ๐บ" ] , [ "AW" , "๐ฆ๐ผ" ] , [ "AX" , "๐ฆ๐ฝ" ] , [ "AZ" , "๐ฆ๐ฟ" ] , [ "BB" , "๐ง๐ง" ] , [ "BD" , "๐ง๐ฉ" ] , [ "BE" , "๐ง๐ช" ] , [ "BF" , "๐ง๐ซ" ] , [ "BG" , "๐ง๐ฌ" ] , [ "BH" , "๐ง๐ญ" ] , [ "BI" , "๐ง๐ฎ" ] , [ "BJ" , "๐ง๐ฏ" ] , [ "BM" , "๐ง๐ฒ" ] , [ "BN" , "๐ง๐ณ" ] , [ "BO" , "๐ง๐ด" ] , [ "BR" , "๐ง๐ท" ] , [ "BS" , "๐ง๐ธ" ] , [ "BT" , "๐ง๐น" ] , [ "BV" , "๐ง๐ป" ] , [ "BW" , "๐ง๐ผ" ] , [ "BY" , "๐ง๐พ" ] , [ "BZ" , "๐ง๐ฟ" ] , [ "CA" , "๐จ๐ฆ" ] , [ "CF" , "๐จ๐ซ" ] , [ "CH" , "๐จ๐ญ" ] , [ "CK" , "๐จ๐ฐ" ] , [ "CL" , "๐จ๐ฑ" ] , [ "CM" , "๐จ๐ฒ" ] , [ "CN" , "๐จ๐ณ" ] , [ "CO" , "๐จ๐ด" ] , [ "CP" , "๐จ๐ต" ] , [ "CR" , "๐จ๐ท" ] , [ "CU" , "๐จ๐บ" ] , [ "CV" , "๐จ๐ป" ] , [ "CW" , "๐จ๐ผ" ] , [ "CX" , "๐จ๐ฝ" ] , [ "CY" , "๐จ๐พ" ] , [ "CZ" , "๐จ๐ฟ" ] , [ "DE" , "๐ฉ๐ช" ] , [ "DG" , "๐ฉ๐ฌ" ] , [ "DJ" , "๐ฉ๐ฏ" ] , [ "DK" , "๐ฉ๐ฐ" ] , [ "DM" , "๐ฉ๐ฒ" ] , [ "DO" , "๐ฉ๐ด" ] , [ "DZ" , "๐ฉ๐ฟ" ] , [ "EA" , "๐ช๐ฆ" ] , [ "EC" , "๐ช๐จ" ] , [ "EE" , "๐ช๐ช" ] , [ "EG" , "๐ช๐ฌ" ] , [ "EH" , "๐ช๐ญ" ] , [ "ER" , "๐ช๐ท" ] , [ "ES" , "๐ช๐ธ" ] , [ "ET" , "๐ช๐น" ] , [ "EU" , "๐ช๐บ" ] , [ "FI" , "๐ซ๐ฎ" ] , [ "FJ" , "๐ซ๐ฏ" ] , [ "FK" , "๐ซ๐ฐ" ] , [ "FM" , "๐ซ๐ฒ" ] , [ "FO" , "๐ซ๐ด" ] , [ "FR" , "๐ซ๐ท" ] , [ "GA" , "๐ฌ๐ฆ" ] , [ "GB" , "๐ฌ๐ง" ] , [ "HK" , "๐ญ๐ฐ" ] ,["HU","๐ญ๐บ"], [ "ID" , "๐ฎ๐ฉ" ] , [ "IE" , "๐ฎ๐ช" ] , [ "IL" , "๐ฎ๐ฑ" ] , [ "IM" , "๐ฎ๐ฒ" ] , [ "IN" , "๐ฎ๐ณ" ] , [ "IS" , "๐ฎ๐ธ" ] , [ "IT" , "๐ฎ๐น" ] , [ "JP" , "๐ฏ๐ต" ] , [ "KR" , "๐ฐ๐ท" ] , [ "LU" , "๐ฑ๐บ" ] , [ "MO" , "๐ฒ๐ด" ] , [ "MX" , "๐ฒ๐ฝ" ] , [ "MY" , "๐ฒ๐พ" ] , [ "NL" , "๐ณ๐ฑ" ] , [ "PH" , "๐ต๐ญ" ] , [ "RO" , "๐ท๐ด" ] , [ "RS" , "๐ท๐ธ" ] , [ "RU" , "๐ท๐บ" ] , [ "RW" , "๐ท๐ผ" ] , [ "SA" , "๐ธ๐ฆ" ] , [ "SB" , "๐ธ๐ง" ] , [ "SC" , "๐ธ๐จ" ] , [ "SD" , "๐ธ๐ฉ" ] , [ "SE" , "๐ธ๐ช" ] , [ "SG" , "๐ธ๐ฌ" ] , [ "TH" , "๐น๐ญ" ] , [ "TN" , "๐น๐ณ" ] , [ "TO" , "๐น๐ด" ] , [ "TR" , "๐น๐ท" ] , [ "TV" , "๐น๐ป" ] , [ "TW" , "๐จ๐ณ" ] , [ "UK" , "๐ฌ๐ง" ] , [ "UM" , "๐บ๐ฒ" ] , [ "US" , "๐บ๐ธ" ] , [ "UY" , "๐บ๐พ" ] , [ "UZ" , "๐บ๐ฟ" ] , [ "VA" , "๐ป๐ฆ" ] , [ "VE" , "๐ป๐ช" ] , [ "VG" , "๐ป๐ฌ" ] , [ "VI" , "๐ป๐ฎ" ] , [ "VN" , "๐ป๐ณ" ] , [ "ZA" , "๐ฟ๐ฆ"]])


function ReadPolicy(cnt) {
  var res = ""
  for (var key in cnt) {
    if (key == policy_name){
      dd = cnt[key]
      res = res + dd.join(arrow)
      break
    }
  }
  return res.split(policy_name+arrow)[1]
}

const message = {
  action: "get_policy_state",
  //content: dict

};


$configuration.sendMessage(message).then(resolve => {
  if (resolve.error) {
    console.log(resolve.error);
  }
  if (resolve.ret) {
    output = ReadPolicy(resolve.ret)
  }
})



!(async () => {
  let result = {
    title: 'Netflix ่งฃ้ๆฃๆต',
    subtitle: output,
    content: 'ๆฃๆตๅคฑ่ดฅ๏ผ่ฏท้่ฏ',
  }
  await test(FILM_ID)
  .then((code) => {
    console.log(code)
    if (code === 'Not Available') {
      result['content'] = '่ฏฅ่็นๆช่งฃ้ Netflix'
      //console.log(result)
      return
    }
    if (code === 'Not Found') {
      result['content'] = '่ฏฅ่็นไปๆฏๆ่งฃ้ Netflix ่ชๅถๅง'
      return
    }
    result['content'] = '่ฏฅ่็นๅฎๆด่งฃ้ Netflix โ โฆ'+flags.get(code.toUpperCase())+" ๅฐๅบโง"
    $notify(result["title"], output, result["content"], link)
    
    //console.log(result)
    $done()
  })
})()
.finally(() => $.done());

function test(filmId) {
  return new Promise((resolve, reject) => {
    let option = {
      url: BASE_URL + filmId,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
      },
    }
    $task.fetch(option).then (response => {
      console.log(response.statusCode)
      if (response.statusCode === 404) {
        resolve('Not Found')
        return
      }

      if (response.statusCode === 403) {
        resolve('Not Available')
        return
      }

      if (response.statusCode === 200) {
        let url = response.headers['X-Originating-URL']
        let region = url.split('/')[3]
        region = region.split('-')[0]
        if (region == 'title') {
          region = 'us'
        }
        resolve(region)
        return
      }
      reject('Error')
    })
  })
}
