import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Recordatorios from '@/views/Recordatorios.vue';

describe('Recordatorios', ()=>{

    let wrapper;

    beforeEach(() => {
        wrapper = mount(Recordatorios);
    })

    it('esconde la lista si no hay ningun recordatorio', () => {
        expect(wrapper.find('ul').exists()).to.be.false;
    });

    it('puede agregar nuevos recordatorios', async () => {
        agregarRecordatorio('Ir a la tienda');
        await Vue.nextTick();
        expect(wrapper.find('ul').text()).to.equal('Ir a la tienda Borrar');
    });

    it('puede borrar recordatorios', async () => {
        agregarRecordatorio('Ir a la tienda');
        agregarRecordatorio('Comprar comida');
        await Vue.nextTick();
        let botonBorrar = wrapper.find('#borrar0');
        botonBorrar.trigger('click');
        await Vue.nextTick();
        expect(wrapper.find('ul > li').text()).to.equal('Comprar comida Borrar');
        expect(wrapper.find('ul > li').text()).not.to.equal('Ir a la tienda Borrar');
    });
    
    function agregarRecordatorio(params) {
        let recordatorio = wrapper.find("input.nuevoRecordatorio");
        recordatorio.element.value = params;
        recordatorio.trigger('input');
        wrapper.find('button#agregar').trigger('click');
    }

});