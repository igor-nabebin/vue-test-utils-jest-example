import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App', () => {
  it('renders keyCode after keydown event is fired', () => {
    const wrapper = shallowMount(App)
    const input = wrapper.find('input')
    input.trigger('keydown', {
      keyCode: 65
    })
    const keyCodeContainer = wrapper.find('span')
    expect(keyCodeContainer.text()).toBe('65')
  })
})
