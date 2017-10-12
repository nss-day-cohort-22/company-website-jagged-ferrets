const blogDatabase = [
    
    {
        "title": "This ferret ponders his own existence for the first time - can you believe what he does next?",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non velit vitae sem eleifend tincidunt. Cras ultrices turpis arcu, id pretium leo dapibus vitae. Proin fringilla ac leo id finibus. Etiam sapien elit, sollicitudin sed libero id, faucibus mattis purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque at laoreet sapien. Morbi rhoncus dui ut tortor tempus, a iaculis lacus egestas. Pellentesque eget viverra leo, eu interdum risus. Mauris id iaculis arcu. Nam dapibus ipsum quis cursus ultricies. Duis nec lectus sem. Nunc ipsum erat, gravida nec posuere in, ultrices ut lectus. Etiam rhoncus augue ut tortor venenatis, in pharetra neque aliquet. Pellentesque eget tortor laoreet lectus rhoncus pretium.",
        "image": "https://pbs.twimg.com/media/C9JgA9_W0AAweg4.jpg",
        "author": "Christoferret Miller"
    },
    
    {
        "title": "15 easy ways to teach you ferret to be less intolerant (HINT: its harder than you think!)",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non velit vitae sem eleifend tincidunt. Cras ultrices turpis arcu, id pretium leo dapibus vitae. Proin fringilla ac leo id finibus. Etiam sapien elit, sollicitudin sed libero id, faucibus mattis purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque at laoreet sapien. Morbi rhoncus dui ut tortor tempus, a iaculis lacus egestas. Pellentesque eget viverra leo, eu interdum risus. Mauris id iaculis arcu. Nam dapibus ipsum quis cursus ultricies. Duis nec lectus sem. Nunc ipsum erat, gravida nec posuere in, ultrices ut lectus. Etiam rhoncus augue ut tortor venenatis, in pharetra neque aliquet. Pellentesque eget tortor laoreet lectus rhoncus pretium.",
        "image": "https://68.media.tumblr.com/tumblr_m1at3ykUM21r9uia2o1_400.jpg",
        "author": "Christoferret Miller"
    },
    
    {
        "title": "By setting her pet ferret free and then having it never return, she discovered an amazing life hack!",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non velit vitae sem eleifend tincidunt. Cras ultrices turpis arcu, id pretium leo dapibus vitae. Proin fringilla ac leo id finibus. Etiam sapien elit, sollicitudin sed libero id, faucibus mattis purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque at laoreet sapien. Morbi rhoncus dui ut tortor tempus, a iaculis lacus egestas. Pellentesque eget viverra leo, eu interdum risus. Mauris id iaculis arcu. Nam dapibus ipsum quis cursus ultricies. Duis nec lectus sem. Nunc ipsum erat, gravida nec posuere in, ultrices ut lectus. Etiam rhoncus augue ut tortor venenatis, in pharetra neque aliquet. Pellentesque eget tortor laoreet lectus rhoncus pretium.",
        "image": "https://s-media-cache-ak0.pinimg.com/originals/a4/16/12/a41612cc6ba98e2bca9e9c77a97ed4da.jpg",
        "author": "Christoferret Miller"
    },
    
    {
        "title": "Your ferret hates you and the reason why is shocking.",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non velit vitae sem eleifend tincidunt. Cras ultrices turpis arcu, id pretium leo dapibus vitae. Proin fringilla ac leo id finibus. Etiam sapien elit, sollicitudin sed libero id, faucibus mattis purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque at laoreet sapien. Morbi rhoncus dui ut tortor tempus, a iaculis lacus egestas. Pellentesque eget viverra leo, eu interdum risus. Mauris id iaculis arcu. Nam dapibus ipsum quis cursus ultricies. Duis nec lectus sem. Nunc ipsum erat, gravida nec posuere in, ultrices ut lectus. Etiam rhoncus augue ut tortor venenatis, in pharetra neque aliquet. Pellentesque eget tortor laoreet lectus rhoncus pretium.",
        "image": "https://i.pinimg.com/736x/ea/3b/d0/ea3bd039e31777ae83665d5937667e45--ferrets-in-sweaters-cute-sweaters.jpg",
        "author": "Christoferret Miller"
    },
    
    {
        "title": "Thats not a ferret, THIS is a ferret!  37 Reasons your ferret isn’t living up to its end of the bargain.",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non velit vitae sem eleifend tincidunt. Cras ultrices turpis arcu, id pretium leo dapibus vitae. Proin fringilla ac leo id finibus. Etiam sapien elit, sollicitudin sed libero id, faucibus mattis purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque at laoreet sapien. Morbi rhoncus dui ut tortor tempus, a iaculis lacus egestas. Pellentesque eget viverra leo, eu interdum risus. Mauris id iaculis arcu. Nam dapibus ipsum quis cursus ultricies. Duis nec lectus sem. Nunc ipsum erat, gravida nec posuere in, ultrices ut lectus. Etiam rhoncus augue ut tortor venenatis, in pharetra neque aliquet. Pellentesque eget tortor laoreet lectus rhoncus pretium.",
        "image": "http://ecx.images-amazon.com/images/I/71Y31s11PhL._SL1200_.jpg",
        "author": "Christoferret Miller"
    }
]

let blogDatabaseString = JSON.stringify(blogDatabase)
localStorage.setItem("blogDatabaseStored", blogDatabaseString)