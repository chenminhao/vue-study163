import * as types from './types'
export default{
    shows:({commit})=>{
        commit(types.SHOWS);
    },
    index:({commit})=>{
        commit(types.INDEX);
    }
}