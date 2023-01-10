const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const nameJson = req.params
    console.log(nameJson)

    const { name } = req.params
    console.log(name)

    if (name == "cat"){
        res.json({'sound': '야옹'})
    } else if (name == "dog"){
        res.json({'sound': '멍멍'})
    } else if (name == "pig"){
        res.json({'sound': '꿀꿀'})
    } else {
        res.json({'sound': '알수없음'})
    }
})

// app.get('/user/:id', (req, res) => {
//     // const q = req.params
//     // console.log(q.id)
//     // res.json({'id': q.id})

//     const q = req.query
//     console.log(q)
//     console.log(q.firstName)
//     console.log(q.lastName)
//     console.log(q.extraInfo)

//     res.send({'firstName':q.firstName, 'lastName':q.lastName, 'extraInfo':q.extraInfo})
// })

// app.get('/dog', (req, res) => {
//     res.json({'sound':'멍멍'})
// })

// app.get('/cat', (req, res) => {
//     res.json({'sound':'야옹'})
// })

// app.get('/dog', (req, res) => {
//     res.send('강아지')
// })

// app.get('/cat', (req, res) => {
//     res.send('고양이')
// })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})