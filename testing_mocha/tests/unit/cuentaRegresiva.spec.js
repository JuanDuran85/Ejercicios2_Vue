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

    it('muestra mensaje cuando termine la cuenta', async () => {
        wrapper.setProps({
            tiempoProps: moment().add(10, 'seconds')
        });
        await Vue.nextTick();
        buscando('10 Seconds');
        clock.tick(10000);
        wrapper.vm.$nextTick(()=>{
            buscando('Finalizado...');
        });
    });

    it('activa evento cuando el contador finaliza', async () => {
        wrapper.setProps({
            tiempoProps: moment().add(10, 'seconds')
        });
        await Vue.nextTick();
        buscando('10 Seconds');
        clock.tick(10000);
        wrapper.vm.$nextTick(()=>{
            expect(wrapper.emitted().finalizado).to.be.a('array');
            expect(wrapper.emitted().finalizado[0][0]).to.equal('fin del tiempo');
        });
    });

    it('muestra mensaje personalizado cuando el contador finaliza', async () => {
        wrapper.setProps({
            tiempoProps: moment().add(10, 'seconds'),
            textoConteo: 'El contador a finalizo con exito'
        });
        await Vue.nextTick();
        buscando('10 Seconds');
        clock.tick(10000);
        wrapper.vm.$nextTick(()=>{
            buscando('El contador a finalizo con exito');
        });
    });

    it('limpia el intervalo cuando esta completo', (done) => {
        wrapper.setProps({
            tiempoProps: moment().add(10, 'seconds'),
        });

        clock.tick(10000);
        expect(wrapper.vm.now.getSeconds()).to.equal(10);
        
        wrapper.vm.$nextTick(()=>{
            clock.tick(5000);
            try {
                expect(wrapper.vm.now.getSeconds()).to.equal(10);
                done();
            } catch (error) {
                done(error);
            }
        });
    });

    let buscando = (texto,selector) => {
        let miniWrap = selector ? wrapper.find(selector) : wrapper;
        expect(miniWrap.html()).to.contains(texto);
    }
});