import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Vue from 'vue';
import moment from 'moment';
import CuentaRegresiva from '@/views/CuentaRegresiva.vue';
import sinon from 'sinon';

describe('Cuenta Regresiva',()=>{
    
    let wrapper, clock;

    beforeEach(() => {
        clock = sinon.useFakeTimers();
        wrapper = mount(CuentaRegresiva);
    });

    afterEach(() => clock.restore());

    it('renderiza el conteo regresivo', async ()=>{
        wrapper.setProps({
            tiempoProps: moment().add(10, 'seconds')
        });
        await Vue.nextTick();
        buscando('0 Days');
        buscando('0 Hours');
        buscando('0 Minutes');
        buscando('10 Seconds');
    });
    
    it('reduce el tiempo cada segundo', async () => {
        wrapper.setProps({
            tiempoProps: moment().add(10, 'seconds')
        });
        await Vue.nextTick();
        buscando('10 Seconds');
        clock.tick(1000);
        wrapper.vm.$nextTick(()=>{
            buscando('9 Seconds');
        });
    });

    let buscando = (texto,selector) => {
        let miniWrap = selector ? wrapper.find(selector) : wrapper;
        expect(miniWrap.html()).to.contains(texto);
    }

/*     let tipo = (selector, texto) => {
        let nodo = wrapper.find(selector);
        nodo.element.value = texto;
        nodo.trigger('input');
    }

    let botonesClick = (selector) => {
        wrapper.find(selector).trigger('click')
    } */
});