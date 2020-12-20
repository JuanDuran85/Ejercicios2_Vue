import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Contador from '@/components/Contador.vue';

describe('Test - Contador', ()=>{
    //let wrapper = shallowMount(Contador);
    let wrapper;
    beforeEach(() => {
        wrapper = mount(Contador);
    });
    
    it('se encuentra por defecto en 0', () => {
        expect(wrapper.vm.contador).to.equal(0);
    });
    
    it('incrementa el conteo al hacer clic sobre el boton incrementar', () => {
        expect(wrapper.vm.contador).to.equal(0);
        //wrapper.find('button').trigger('click');
        wrapper.find('#incremento').trigger('click');
        expect(wrapper.vm.contador).to.equal(1);
    });

    it('decrementa el conteo al hacer clic sobre el boton decrementar', () => {
        expect(wrapper.vm.contador).to.equal(0);
        wrapper.find('#incremento').trigger('click');
        wrapper.find('#incremento').trigger('click');
        wrapper.find('#incremento').trigger('click');
        wrapper.find('#decremento').trigger('click');
        expect(wrapper.vm.contador).to.equal(2);
    });
    
    it('no debe llegar a menos de cero', () => {
        expect(wrapper.vm.contador).to.equal(0);
        wrapper.setData({
            contador: 2
        });
        wrapper.find('#decremento').trigger('click');
        wrapper.find('#decremento').trigger('click');
        wrapper.find('#decremento').trigger('click');
        expect(wrapper.vm.contador).to.equal(0);
    });
    
    it('si esta en cero no debe mostrarse el boton de decremento', async () => {
        wrapper.setData({
            contador: 2
        });
        expect(wrapper.vm.contador).to.equal(2);
        await Vue.nextTick();
        expect(wrapper.find('button#decremento').element.style.display).to.equal('');
        wrapper.setData({
            contador: 0
        });
        expect(wrapper.vm.contador).to.equal(0);
        await Vue.nextTick();
        expect(wrapper.find('button#decremento').element.style.display).to.equal('none');
    });
    
    it('busca Clases y Id, revisando el contador', () => {
        expect(wrapper.classes('hello','cuenta')).to.be.true;
        expect(wrapper.find('.cuenta').text()).to.equal("Contador: 0");
    });
})