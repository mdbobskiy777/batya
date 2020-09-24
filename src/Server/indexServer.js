const express = require('express')
const app = express()
const port = 3001


let users = [
    {
        id: 0,
        isFollow: false,
        avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
        name: {firstName: "Евгений", secondName: "Бобер"},
        description: "hi, i am the badass",
        location: {country: "Ukraine", city: "Kyiv/Zhymotyr"}
    },
    {
        id: 1,
        isFollow: true,
        avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
        name: {firstName: "Владимир", secondName: "Мельничук"},
        description: "i am smart guy",
        location: {country: "Ukraine", city: "Kyiv"}
    },
    {
        id: 2,
        isFollow: true,
        avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
        name: {firstName: "Даниил", secondName: "Бондарь"},
        description: "who cares?",
        location: "Ukraine",
        city: "Zhytomyr"
    },
    {
        id: 3,
        isFollow: false,
        avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
        name: {firstName: "Бондан", secondName: "Голубец"},
        description: "hi, i am car-guy",
        location: {country: "Ukraine", city: "Kyiv"}
    },
    {
        id: 4,
        isFollow: true,
        avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
        name: {firstName: "Андре", secondName: "Камински"},
        description: "i am Kotlin guy",
        location: {country: "Ukraine", city: "Kyiv"}
    },
    {
        id: 5,
        isFollow: true,
        avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
        name: {firstName: "Иллья", secondName: "Дорогин"},
        description: "narco",
        location: "Ukraine",
        city: "Kryvyi Righ"
    },
    {
        id: 6,
        isFollow: false,
        avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
        name: {firstName: "Павел", secondName: "Черков"},
        description: "hi, i am true-talker",
        location: {country: "Ukraine", city: "Kyiv"}
    },
    {
        id: 7,
        isFollow: true,
        avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
        name: {firstName: "Николай", secondName: "Богданенко"},
        description: "i am your sensei",
        location: {country: "Ukraine", city: "Kyiv"}
    },
    {
        id: 8,
        isFollow: true,
        avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
        name: {firstName: "Андрей", secondName: "Билас"},
        description: "lost",
        location: "Ukraine",
        city: "Lviv"
    }
]

let usersPages = [
    {
        info : [
            {name: "Eugene"},
            {surname: "Bober"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList : [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText  : ""
    },
    {
        info : [
            {name: "Vladimir"},
            {surname: "Melnichuk"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList : [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText  : ""
    },
    {
        info : [
            {name: "Daniil"},
            {surname: "Bondar"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList : [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText  : ""
    },
    {
        info : [
            {name: "Bogdan"},
            {surname: "Golubets"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList : [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText  : ""
    },
    {
        info : [
            {name: "Andre"},
            {surname: "Kaminski"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList : [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText  : ""
    },
    {
        info : [
            {name: "Ilya"},
            {surname: "Dorogin"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList : [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText  : ""
    },
    {
        info : [
            {name: "Pavel"},
            {surname: "Cherkov"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList : [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText  : ""
    },
    {
        info : [
            {name: "Nikolay"},
            {surname: "Bogdanenko"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList : [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText  : ""
    },
    {
        info : [
            {name: "Andrey"},
            {surname: "Bilas"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList : [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText  : ""
    }
]

let totalCount = users.length

let getProfilePage = (profilesPages, id) =>{
    let neadedPage;
    profilesPages.map((el,i)=>{
        if (id===i) {
            neadedPage =  el
        }
    })
    return neadedPage;
}

let sendUsers = (users, number) => {

    let coef = 1;
    let usersPage = [];
    for (let i = 0; i < users.length; i++) {
        usersPage.push(users[i])
        console.log(usersPage)
        if (i + 1 === 3 * coef) {
            if (coef === number) {
                break
            } else {
                usersPage = [];
                coef++;
            }
        }

    }
    console.log(usersPage)
    return usersPage;
}
let usersFilter = (users, number) => {

    return users.filter((e, i) => {
        if (i + 1 <= number) return e
    })
}
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/users', (request, response) => {
    console.log(request.query.pageNumber);
    console.log(request.query.count);

    let sendedUsers = sendUsers(users, Number(request.query.pageNumber));
    console.log(sendedUsers)
    let filteredUsers = usersFilter(sendedUsers, Number(request.query.count))
    console.log(filteredUsers)
    let total = Math.ceil(totalCount/3);
    response.send({users:filteredUsers, totalCount:total})

})

app.get('/profile', (request, response) => {
    console.log(request.query.id);
    let profile = getProfilePage(usersPages,Number(request.query.id))
    console.log(profile)
    response.send({profile})
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})