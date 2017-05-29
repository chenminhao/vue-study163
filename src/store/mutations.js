import {
	SHOWS,
  INDEX
} from './types'
import getters from './getters'
const state = {
	count:false
};

const mutations = {
	[SHOWS](state) {
		state.count=!	state.count;
	},
  [INDEX](state) {
	}
};

export default {
	state,
	mutations,
	getters
}