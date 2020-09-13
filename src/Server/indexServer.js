const express = require('express')
const app = express()
const port = 3001




let users = [
    {
        id: 0, isFollow: false, avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
        name: {firstName: "Евгений", secondName: "Бобер"},
        description: "hi, i am the badass", location: {country: "Ukraine", city: "Kyiv"}
    },
    {
        id: 1, isFollow: true, avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
        name: {firstName: "Владимир", secondName: "Мельничук"},
        description: "i am smart guy", location: {country: "Ukraine", city: "Kyiv"}
    },
    {
        id: 2, isFollow: true, avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
        name: {firstName: "Даниил", secondName: "Бондарь"},
        description: "who cares?", location: "Ukraine", city: "Zhytomyr"
    }
]


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (request, response) => {
    response.send({users})
})
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})