import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Cupon from '@/components/Cupon.vue';

describe('Cupon', ()=>{
    let wrapper;
    beforeEach(() => {
        wrapper = mount(Cupon);
        wrapper.setData({
            cupones: [
                {
                    codigo: '50OFF',
                    mensaje: "50% de descuento",
                    descuento: 50
                },
                {
                    codigo: 'FREE',
                    mensaje: "100% de descuento",
                    descuento: 100
                }
            ]
        })
    });

    it('acepta un codigo de cupon', () => {
        expect(wrapper.find('input#cupon').html()).to.equal('<input type="text" id="cupon">');
        let inputCupon = wrapper.find('input#cupon');
        inputCupon.element.value = "EDFG43455";
        inputCupon.trigger('input');
        expect(inputCupon.element.value).to.equal("EDFG43455");
    });
    
    it('valida el codigo ingresado', async () => {
        enterCuponCodigo('50OFF');
        await Vue.nextTick();
        expect(wrapper.vm.valido).to.be.true;
        expect(wrapper.find('p').text()).to.contain('50% de descuento');
    });

    it('valida el codigo ingresado 2', async () => {
        enterCuponCodigo('Falso');
        await Vue.nextTick();
        expect(wrapper.vm.valido).to.be.false;
        expect(wrapper.find('p').text()).to.contain('Cupon Aplicado no valido');
    });

    it('activa un evento emit cuando es valido', () => {
        enterCuponCodigo('50OFF');
        Vue.nextTick();
        console.log(wrapper.emitted().aplicado);
        expect(wrapper.vm.validando).to.be.a("function")
        expect(wrapper.emitted().aplicado).to.be.a('array');
        expect(wrapper.emitted().aplicado[0][0]).to.equal(50);
    });

    function enterCuponCodigo(codigo) {
        let inputCupon = wrapper.find('input#cupon');
        inputCupon.element.value = codigo;
        inputCupon.trigger('input');
        inputCupon.trigger('keyup.enter');
    }
})