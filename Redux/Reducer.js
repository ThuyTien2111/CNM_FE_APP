import { createReducer } from '@reduxjs/toolkit';
import { setUser, setUserList, setMess, setMessRead, setBestFriend, addNewBestFriend, 
    setRequestEarn, setRequestSend, addFriend, removeRequest, addRequest, setSearchUser,
    setSearchItem, addSearchUser, addSearchItem
} from './Action';

const initState = {
    user: {},
    mess: {},
    bestFriend:{},
    requestEarn:{},
    requestSend:{},
    searchItem:"",
    searchUser:{},
    userList: [
        {
            id: 1,
            username: 'Tien',
            phone: '0388495421',
            pass: '123',
            birthdate: new Date().toDateString(),
            avt: 'https://i.imgur.com/rAY1VxR.png',
            mess: [
                {
                    from: 'Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    message: 'Hello friend !',
                    read: false,
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
                    phone: '0388495422',
                },
                {
                    name: 'Duong 2',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495412',
                },
                {
                    name: 'Duong 3',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495432',

                },
                {
                    name: 'Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495414',
                },
                {
                    name: 'Hellios 2 Helios Helios Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    onl: true,
                    bestfr: false,
                    phone: '0388495415',
                },
                {
                    name: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495416',

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
            ],
            reqEarn:[
                {
                    name: 'Lan Huong',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495111',
                },
                {
                    name: 'Huynh An',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495222',
                },
                {
                    name: 'Robert',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495333',
                },
                {
                    name: 'Hellios 2 Helios Helios Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    phone: '0388495415',
                }
            ],
            reqSend:[
                {
                    name: 'Le Anh Thu',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388491111',
                },
                {
                    name: 'Le Ngoc Can',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388492222',
                },
                {
                    name: 'Thanh Thuy',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388493333',
                },
                {
                    name: 'Do Thi Hien',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388494444',
                },
                {
                    name: 'Xuan Hien',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495555',
                },
                {
                    name: 'Xuan Hien 2',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388496666',
                },
                {
                    name: 'Xuan Hien 3',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388497777',
                },
                {
                    name: 'Xuan Hien 4',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388498888',
                },
                {
                    name: 'Xuan Hien 5',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388499999',
                },
                {
                    name: 'Xuan Hien 6',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388490000',
                },
                {
                    name: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    phone: '0388495416',
                }
            ],
            searched:["hong", "zalo", "thu", "han", "clo"]

        },
        {
            id: 2,
            username: 'Duong',
            phone: '0388495422',
            pass: '123',
            birthdate: new Date().toDateString(),
            avt: 'https://i.imgur.com/Iqwh44v.png',
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
                    name: 'Duong 2',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495412',
                },
                {
                    name: 'Duong 3',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495432',

                },
                {
                    name: 'Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495414',
                },
                {
                    name: 'Hellios 2 Helios Helios Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    onl: true,
                    bestfr: false,
                    phone: '0388495415',
                },
                {
                    name: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495416',

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
            ],
            reqEarn:[
                {
                    name: 'Lan Huong',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495111',
                },
                {
                    name: 'Huynh An',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495222',
                },
                {
                    name: 'Robert',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495333',
                },
                {
                    name: 'Hellios 2 Helios Helios Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    phone: '0388495415',
                }
            ],
            reqSend:[
                {
                    name: 'Le Anh Thu',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388491111',
                },
                {
                    name: 'Le Ngoc Can',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388492222',
                },
                {
                    name: 'Thanh Thuy',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388493333',
                },
                {
                    name: 'Do Thi Hien',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388494444',
                },
                {
                    name: 'Xuan Hien',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495555',
                },
                {
                    name: 'Xuan Hien 2',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388496666',
                },
                {
                    name: 'Xuan Hien 3',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388497777',
                },
                {
                    name: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    phone: '0388495416',
                }
            ],
            searched:["hong", "zalo", "thu", "han", "clo"]

        },
        {
            id: 3,
            username: 'Howl',
            phone: '0388495423',
            pass: '123',
            birthdate: new Date().toDateString(),
            avt: 'https://i.imgur.com/iJLDGpZ.png',
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
                    name: 'Duong 2',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495412',
                },
                {
                    name: 'Duong 3',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495432',

                },
                {
                    name: 'Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495414',
                },
                {
                    name: 'Hellios 2 Helios Helios Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    onl: true,
                    bestfr: false,
                    phone: '0388495415',
                },
                {
                    name: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495416',

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
            ],
            reqEarn:[
                {
                    name: 'Lan Huong',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495111',
                },
                {
                    name: 'Huynh An',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495222',
                },
                {
                    name: 'Robert',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495333',
                },
                {
                    name: 'Hellios 2 Helios Helios Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    phone: '0388495415',
                }
            ],
            reqSend:[
                {
                    name: 'Le Anh Thu',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388491111',
                },
                {
                    name: 'Le Ngoc Can',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388492222',
                },
                {
                    name: 'Thanh Thuy',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388493333',
                },
                {
                    name: 'Do Thi Hien',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388494444',
                },
                {
                    name: 'Xuan Hien',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495555',
                },
                {
                    name: 'Xuan Hien 2',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388496666',
                },
                {
                    name: 'Xuan Hien 5',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388499999',
                },
                {
                    name: 'Xuan Hien 6',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388490000',
                },
                {
                    name: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    phone: '0388495416',
                }
            ],
            searched:["hong", "zalo", "thu", "han", "clo"]
        },
        {
            id: 4,
            username: 'Lan Huong',
            phone: '0388495111',
            pass: '123',
            birthdate: new Date().toDateString(),
            avt: 'https://i.imgur.com/rAY1VxR.png',
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
                    name: 'Duong 2',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495412',
                },
                {
                    name: 'Duong 3',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495432',

                },
                {
                    name: 'Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495414',
                },
                {
                    name: 'Hellios 2 Helios Helios Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    onl: true,
                    bestfr: false,
                    phone: '0388495415',
                },
                {
                    name: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    onl: false,
                    bestfr: false,
                    phone: '0388495416',

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
            ],
            reqEarn:[
                {
                    name: 'Huynh An',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495222',
                },
                {
                    name: 'Robert',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495333',
                },
                {
                    name: 'Hellios 2 Helios Helios Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    phone: '0388495415',
                }
            ],
            reqSend:[
                {
                    name: 'Le Anh Thu',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388491111',
                },
                {
                    name: 'Le Ngoc Can',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388492222',
                },
                {
                    name: 'Thanh Thuy',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388493333',
                },
                {
                    name: 'Do Thi Hien',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388494444',
                },
                {
                    name: 'Xuan Hien',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388495555',
                },
                {
                    name: 'Xuan Hien 2',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388496666',
                },
                {
                    name: 'Xuan Hien 5',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388499999',
                },
                {
                    name: 'Xuan Hien 6',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    phone: '0388490000',
                },
                {
                    name: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    phone: '0388495416',
                }
            ],
            searched:["hong", "zalo", "thu", "han", "clo"]
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
    [setRequestEarn]: (state, action) => {
        state.requestEarn = action.payload
    },
    [setRequestSend]: (state, action) => {
        state.requestSend = action.payload
    },
    [setSearchItem]: (state, action) => {
        state.searchItem = action.payload
    },
    [setSearchUser]: (state, action) => {
        state.searchUser = action.payload
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
    [removeRequest]: (state) => {
        let newReqSend=state.user.reqSend.filter((req)=>req.name!=state.requestSend.name)
        state.user.reqSend=newReqSend
    },
    [addFriend]: (state) => {
    let friendToAdd = state.user.reqEarn.find((req) => req.name == state.requestEarn.name);
    let existingFriend = state.user.friend.find((friend) => friend.name == friendToAdd.name);
    if (!existingFriend) {
        state.user.friend.push({
            name: friendToAdd.name,
            avt: friendToAdd.avt,
            onl: true,  // Giả sử khi thêm bạn mới, trạng thái online là false
            bestfr: false,  // Giả sử khi thêm bạn mới, không phải là bạn thân
            phone: friendToAdd.phone
        });
    }
    let newReqEarn = state.user.reqEarn.filter((req) => req.name !== friendToAdd.name);
    state.user.reqEarn=newReqEarn
    },
    [addRequest]: (state) => {
        let friendToAdd = state.searchUser
        state.user.reqSend.push({
            name: friendToAdd.username,
            avt: friendToAdd.avt,
            phone: friendToAdd.phone,
        });
    },
    [addSearchItem]: (state) => {
        let existingItem = state.user.searched.find((item) => item == state.searchItem);
        if (!existingItem) {
            state.user.searched.push(state.searchItem);
        }
    },


})