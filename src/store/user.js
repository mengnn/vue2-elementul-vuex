import Cookie from 'js-cookie'
export default {
    state: {
        token:'',
        remember: false
    },
    mutations: {
        setToken(state,val){
            state.token = val
            Cookie.set('token',val)
        },
        clearToken(state){
            state.token = ''
            Cookie.remove('token')
        },
        getToken(state){
            state.token = state.token || Cookie.get('token')
        },
        setRemember(state,val) {
            state.remember = val
            Cookie.set("remember",val)
        },
        getRemember(state){
            state.remember = state.remember || Cookie.get("remember")
            // state.remember = false
        }
    }
}