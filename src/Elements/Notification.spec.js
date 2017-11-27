import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Notification from './Notification.vue'

describe('Notification.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Notification)
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
