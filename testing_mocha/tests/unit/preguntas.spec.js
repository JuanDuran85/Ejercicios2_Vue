import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Preguntas from '@/views/Preguntas.vue';
import moxios from 'moxios';

describe('Preguntas', ()=>{

    let wrapper;

    beforeEach(() => {
        moxios.install();
        wrapper = mount(Preguntas, {
            propsData: {
                pregunta: {
                    title: "Titulo de la pregunta",
                    body: "Cuerpo de la pregunta"
                }
            }
        });
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('tiene un titulo en el body', () => {

        buscando('Titulo de la pregunta');
        buscando('Cuerpo de la pregunta');
        // expect(wrapper.html()).to.contains("Titulo de la pregunta");
        // expect(wrapper.html()).to.contains("Cuerpo de la pregunta");
    });

    it('puede ser editada', async () => {
       // expect(wrapper.findAll('input[name=titulo]').isVisible()).to.be.false;
        botonesClick('button#editando');
        await Vue.nextTick();

        expect(wrapper.find('input[name=titulo]').element.value).to.equal('Titulo de la pregunta');
        expect(wrapper.find('textarea[name=cuerpo]').element.value).to.equal('Cuerpo de la pregunta');
    });

    it('actualiza la preguntan despues de editarla', async () => {

        botonesClick('button#editando');

        await Vue.nextTick();
        
        tipo('input[name=titulo]','Cambiando el titulo de la pregunta');
        tipo('textarea[name=cuerpo]','Cambiando el cuerpo de la pregunta');
        
        botonesClick('button#guardando');
        await Vue.nextTick();

        moxios.stubRequest('/pregunta/1', {
            status: 200,
            response: {
                title: 'Cambiando el titulo de la pregunta',
                body: 'Cambiando el cuerpo de la pregunta'
            }
        })
        await wrapper.vm.$nextTick();
        await wrapper.vm.$nextTick();

        buscando('Cambiando el titulo de la pregunta');
        buscando('Cambiando el cuerpo de la pregunta');

        /* buscando('Pregunta actualizada en la Base de Datos'); */
        expect(wrapper.find('p#actualizadaPregunta').isVisible);
    });

    it('se puede cancelar el modo de edicion', async () => {
        botonesClick('button#editando');
        await Vue.nextTick();
        tipo('input[name=titulo]','Cambiando el titulo de la pregunta');
        await Vue.nextTick();
        botonesClick('button#cancelar');
        await Vue.nextTick();
        expect(wrapper.html()).to.contains('<!---->')
    });

    let buscando = (texto,selector) => {
        let miniWrap = selector ? wrapper.find(selector) : wrapper;
        expect(miniWrap.html()).to.contains(texto);
    }

    let tipo = (selector, texto) => {
        let nodo = wrapper.find(selector);
        nodo.element.value = texto;
        nodo.trigger('input');
    }

    let botonesClick = (selector) => {
        wrapper.find(selector).trigger('click')
    }
})