import { createReducer } from '@reduxjs/toolkit';
import { setUser, setUserList, setMess, setMessRead, setBestFriend, addNewBestFriend } from './Action';

const initState = {
    user: {},
    mess: {},
    bestFriend:{},
    userList: [
        {
            id: 1,
            username: 'Tien',
            phone: '0388495421',
            pass: '123',
            birthdate: new Date().toDateString(),
            mess: [
                {
                    from: 'Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    message: 'Hello friend !',
                    read: false
                },
                {
                    from: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    message: 'How are u ?',
                    read: false

                },
                {
                    from: 'Design_group',
                    avt: 'https://i.imgur.com/Iqwh44v.png',
                    message: 'Mike: Tysm !',
                    read: false

                },
                {
                    from: 'Duong',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    message: 'Okayyyyy ',
                    read: false

                },
                {
                    from: 'Duong 2',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    message: 'Okayyyyy ',
                    read: false

                },
                {
                    from: 'Duong 3',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    message: 'Okayyyyy ',
                    read: false

                },
                {
                    from: 'Duong 4',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    message: 'Okayyyyy ',
                    read: false

                },
                {
                    from: 'Duong 5',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    message: 'Okayyyyy ',
                    read: false

                },

            ],
            friend: [
                {
                    name: 'Duong',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: true,
                    bestfr: true,
                },
                {
                    name: 'Duong 2',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: false,
                    bestfr: false,
                },
                {
                    name: 'Duong 3',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: false,
                    bestfr: false,

                },
                {
                    name: 'Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    onl: false,
                    bestfr: false,
                },
                {
                    name: 'Hellios 2 Helios Helios Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    onl: true,
                    bestfr: false,
                },
                {
                    name: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    onl: false,
                    bestfr: false,

                }
            ],
            group: [
                {
                    name: 'Design_group',
                    avt: 'https://i.imgur.com/Iqwh44v.png',
                },
                {
                    name: 'Game_group',
                    avt: 'https://i.imgur.com/Iqwh44v.png',
                },
                {
                    name: 'Marketing_group',
                    avt: 'https://i.imgur.com/Iqwh44v.png',
                },
            ]


        },
        {
            id: 2,
            username: 'Duong',
            phone: '0388495422',
            pass: '123',
            birthdate: new Date().toDateString(),
            mess: [
                {
                    from: 'Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    message: 'Hello friend !',
                    read: false

                },
                {
                    from: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    message: 'How are u ?',
                    read: false

                },
                {
                    from: 'Design_group',
                    avt: 'https://i.imgur.com/Iqwh44v.png',
                    message: 'Mike: Tysm !',
                    read: false

                },

            ],
            friend: [
                {
                    name: 'Duong',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: true,
                    bestfr: false,

                },
                {
                    name: 'Duong 2',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: false,
                    bestfr: false,

                },
                {
                    name: 'Duong 3',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: false,
                    bestfr: false,


                },
                {
                    name: 'Hellios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    onl: false,
                    bestfr: true,

                },
                {
                    name: 'Hellios 2 Helios Helios Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    onl: true,
                    bestfr: false,
                },
                {
                    name: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    onl: false,
                    bestfr: true,

                }
            ],
            group: [
                {
                    name: 'Design_group',
                    avt: 'https://i.imgur.com/Iqwh44v.png',
                },
                {
                    name: 'Game_group',
                    avt: 'https://i.imgur.com/Iqwh44v.png',
                },
                {
                    name: 'Study_group',
                    avt: 'https://i.imgur.com/Iqwh44v.png',
                },
            ]
        },
        {
            id: 3,
            username: 'Howl',
            phone: '0388495423',
            pass: '123',
            birthdate: new Date().toDateString(),
            mess: [
                {
                    from: 'Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    message: 'Hello friend !',
                    read: false

                },
                {
                    from: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    message: 'How are u ?',
                    read: false

                }
            ],
            friend: [
                {
                    name: 'Duong',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: true,
                    bestfr: false,

                },
                {
                    name: 'Duong 2',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: false,
                    bestfr: false,


                },
                {
                    name: 'Duong 3',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: false,
                    bestfr: false,


                },
                {
                    name: 'Hellios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    onl: false,
                    bestfr: true,

                },
                {
                    name: 'Hellios 2 Helios Helios Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    onl: true,
                    bestfr: false,

                },
                {
                    name: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    onl: false,
                    bestfr: false,


                }
            ],
            group: [
                {
                    name: 'Design_group',
                    avt: 'https://i.imgur.com/Iqwh44v.png',
                },
                {
                    name: 'Game_group',
                    avt: 'https://i.imgur.com/Iqwh44v.png',
                }
            ]
        }
    ],

}
export const Reducer = createReducer(initState, {
    [setUser]: (state, action) => {
        state.user = action.payload
    },
    [setMess]: (state, action) => {
        state.mess = action.payload
    },
    [setBestFriend]: (state, action) => {
        state.bestFriend = action.payload
    },
    [setUserList]: (state) => {
        var checkU = state.userList.find((u) => u.phone == state.user.phone)
        if (checkU) {
            alert('Số điện thoại đã đăng ký tài khoản')
        } else {
            state.userList.push(state.user)
        }
    },
    [setMessRead]: (state) => {
        state.user.mess.forEach((m) => {
            if (m.read == false && state.mess.from == m.from) {
                m.read = true
            }
        })
    },
    [addNewBestFriend]: (state) => {
        state.user.friend.forEach((m) => {
            if (m.bestfr == false && state.bestFriend.name == m.name) {
                m.bestfr = true
            }else if(m.bestfr == true && state.bestFriend.name == m.name){
                m.bestfr = false
            }
        })
    },

})