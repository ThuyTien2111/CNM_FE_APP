import { createReducer } from '@reduxjs/toolkit';
import { setUser, setUserList } from './Action';

const initState = {
    user: {},
    userList: [
        {
            id: 1,
            username: 'Tien',
            phone: '0388495421',
            pass: '123',
            mess: [
                {
                    from: 'Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    message: 'Hello friend !',
                },
                {
                    from: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    message: 'How are u ?',
                },
                {
                    from: 'Design_group',
                    avt: 'https://i.imgur.com/Iqwh44v.png',
                    message: 'Mike: Tysm !',
                },
                {
                    from: 'Duong',
                    avt: 'https://i.imgur.com/rAY1VxR.png',
                    message: 'Okayyyyy ',
                },

            ]
        },
        {
            id: 2,
            username: 'Duong',
            phone: '0388495422',
            pass: '123',
            mess: [
                {
                    from: 'Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    message: 'Hello friend !',
                },
                {
                    from: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    message: 'How are u ?',
                },
                {
                    from: 'Design_group',
                    avt: 'https://i.imgur.com/Iqwh44v.png',
                    message: 'Mike: Tysm !',
                },

            ]
        },
        {
            id: 3,
            username: 'Howl',
            phone: '0388495423',
            pass: '123',
            mess: [
                {
                    from: 'Helios',
                    avt: 'https://i.imgur.com/lOeHYOs.png',
                    message: 'Hello friend !',
                },
                {
                    from: 'Thai',
                    avt: 'https://i.imgur.com/iJLDGpZ.png',
                    message: 'How are u ?',
                }
            ]
        }
    ],

}
export const Reducer = createReducer(initState, {
    [setUser]: (state, action) => {
        state.user = action.payload
    },
    [setUserList]:(state)=>{
        var checkU=state.userList.find((u)=>u.phone==state.user.phone)
        if(checkU){
           alert('Số điện thoại đã đăng ký tài khoản') 
        }else{
            state.userList.push(state.user)
        }
    },

})