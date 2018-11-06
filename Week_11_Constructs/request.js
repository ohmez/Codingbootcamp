var request = require('request');
request("https://ohmez.github.io/Basic-Portfolio/#", (err, response,body) => {
    if (err) throw err;
    if (!err && response.statusCode == 200) {
        console.log(JSON.stringify(body));
    }

})