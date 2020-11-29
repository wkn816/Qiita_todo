import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
    return new Vuex.Store({
        state: {
            loading: false, // 追加
            currentUser: null,
        },
        mutations: {
            setUser(state, payload) {
                state.currentUser = payload
            },
            setLoading(state, payload) {
                state.loading = payload 
            }
        },
        actions: {
        }
    })
}

export default store