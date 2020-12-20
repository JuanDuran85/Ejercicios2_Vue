import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Contador from '@/components/Contador.vue';

describe('Contador.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Contador, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg);
  });
})
