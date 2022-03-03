const express = require('express');
const app = express()
const port = 5000

app.post('/resgister', (req, res)=>{

    //회원 가입 할떄 필요한 정보들을 clinet에서 가져오면
    // 그것들을 db에 넣어준다.

     
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
