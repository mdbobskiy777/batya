var express = require('express');
var app = express();
var auth = null;

/*let users = [
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
        info: [
            {name: "Eugene"},
            {surname: "Bober"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList: [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText: ""
    },
    {
        info: [
            {name: "Vladimir"},
            {surname: "Melnichuk"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList: [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText: ""
    },
    {
        info: [
            {name: "Daniil"},
            {surname: "Bondar"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList: [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText: ""
    },
    {
        info: [
            {name: "Bogdan"},
            {surname: "Golubets"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList: [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText: ""
    },
    {
        info: [
            {name: "Andre"},
            {surname: "Kaminski"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList: [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText: ""
    },
    {
        info: [
            {name: "Ilya"},
            {surname: "Dorogin"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList: [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText: ""
    },
    {
        info: [
            {name: "Pavel"},
            {surname: "Cherkov"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList: [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText: ""
    },
    {
        info: [
            {name: "Nikolay"},
            {surname: "Bogdanenko"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList: [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText: ""
    },
    {
        info: [
            {name: "Andrey"},
            {surname: "Bilas"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList: [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ],
        newPostText: ""
    }
]*/


let usersData = [
    {
        id: 1,
        username: 'mdbobskiy',
        password: 'password1',
        displayName: 'mdbobskiy',
        userPage: {
            info: [
                {name: "Eugene"},
                {surname: "Bober"},
                {sex: "male"},
                {age: "23"},
                {phone: "+380932731283"}
            ],
            postsList: [
                {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
                {message: "This too", likesNumber: "12"},
                {message: "and this", likesNumber: "3"},
                {message: "soon i change it", likesNumber: "2"},
                {message: "VERY SOON", likesNumber: "45"}
            ],
            newPostText: ""
        },
        users: [
            {
                id: 0,
                isFollow: true,
                avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
                name: {firstName: "Владимир", secondName: "Мельничук"},
                description: "i am smart guy",
                location: {country: "Ukraine", city: "Kyiv"}
            },
            {
                id: 1,
                isFollow: true,
                avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
                name: {firstName: "Даниил", secondName: "Бондарь"},
                description: "who cares?",
                location: "Ukraine",
                city: "Zhytomyr"
            },
            {
                id: 2,
                isFollow: false,
                avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
                name: {firstName: "Бондан", secondName: "Голубец"},
                description: "hi, i am car-guy",
                location: {country: "Ukraine", city: "Kyiv"}
            },
            {
                id: 3,
                isFollow: true,
                avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
                name: {firstName: "Андре", secondName: "Камински"},
                description: "i am Kotlin guy",
                location: {country: "Ukraine", city: "Kyiv"}
            },
            {
                id: 4,
                isFollow: true,
                avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
                name: {firstName: "Иллья", secondName: "Дорогин"},
                description: "narco",
                location: "Ukraine",
                city: "Kryvyi Righ"
            },
            {
                id: 5,
                isFollow: false,
                avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
                name: {firstName: "Павел", secondName: "Черков"},
                description: "hi, i am true-talker",
                location: {country: "Ukraine", city: "Kyiv"}
            }
        ]
    }
    , {
        id: 2,
        username: 'vilat',
        password: 'password1',
        displayName: 'vilat',
        userPage: {
            info: [
                {name: "Daniil"},
                {surname: "Bondar"},
                {sex: "male"},
                {age: "23"},
                {phone: "+380xxxxxxxxx"}
            ],
            postsList: [
                {message: "HI! I am dead inside!", likesNumber: "322"},
            ],
            newPostText: ""
        },
        users: [
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
                isFollow: false,
                avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
                name: {firstName: "Бондан", secondName: "Голубец"},
                description: "hi, i am car-guy",
                location: {country: "Ukraine", city: "Kyiv"}
            },
            {
                id: 3,
                isFollow: true,
                avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
                name: {firstName: "Андре", secondName: "Камински"},
                description: "i am Kotlin guy",
                location: {country: "Ukraine", city: "Kyiv"}
            },
            {
                id: 4,
                isFollow: true,
                avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
                name: {firstName: "Иллья", secondName: "Дорогин"},
                description: "narco",
                location: "Ukraine",
                city: "Kryvyi Righ"
            },
            {
                id: 5,
                isFollow: false,
                avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
                name: {firstName: "Павел", secondName: "Черков"},
                description: "hi, i am true-talker",
                location: {country: "Ukraine", city: "Kyiv"}
            },
            {
                id: 6,
                isFollow: true,
                avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
                name: {firstName: "Николай", secondName: "Богданенко"},
                description: "i am your sensei",
                location: {country: "Ukraine", city: "Kyiv"}
            },
            {
                id: 7,
                isFollow: true,
                avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
                name: {firstName: "Андрей", secondName: "Билас"},
                description: "lost",
                location: "Ukraine",
                city: "Lviv"
            }
        ]
    }
];

let getIdByData = (username, password) => {
    let neededUser = usersData.filter(u => u.username === username)
    return neededUser[0].id;
}

let getUser = (id) => {
    let neededUser = usersData.filter(u => u.id === id)
    return neededUser[0];
}
let getProfilePage = (profilesPages, id) => {
    let neadedPage;
    profilesPages.map((el, i) => {
        if (id === i) {
            neadedPage = el
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

app.post('/login',
    function (req, res) {
        console.log("success")
        console.log(req.query.username)
        console.log(req.query.password)

        let username = req.query.username;
        let password = req.query.password;
        let id = getIdByData(username, password);
        console.log(id)
        auth = id;
        return res.send({success: true,username:username, id: id})
    }, function (err, req, res, next) {
        // ошибка входа
        console.log("not success")
        return res.status(401).send({success: false, message: err})
    })
app.get('/logout', (req, res) => {
    auth = 0;
    return res.send({success: false, id: auth})

})
app.get('/profile',
    (request, response) => {
        console.log("profile get");
        let user = getUser(auth)
        console.log("auth " + auth)
        console.log("user " + user)

        response.send({user: user})
    })

app.get('/users', (request, response) => {
    console.log(request.query.pageNumber);
    console.log(request.query.count);
    let user = getUser(auth)
    console.log(user.users)
    let nedeedUsers = sendUsers(user.users,Number(request.query.pageNumber))
    let filteredUsers = usersFilter(nedeedUsers, Number(request.query.count))
    console.log(filteredUsers)
    let total = Math.ceil(user.users.length / 3);
    console.log(total);
    response.send({users: filteredUsers, totalCount: total})

})
app.listen(3001);
