import { fireEvent, render, screen} from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {
    test('debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input,{target:{value:'Saitama'}})
        expect(input.value).toBe('Saitama')
    });
    test('debe llamar onNewCategory si el input tiene un valor', () => { 
        const onNewCategory = jest.fn();
        const inputValue = 'Saitama';
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');
        fireEvent.input(input,{target:{value:inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    });
    test('no debe llamar el onNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const form  = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();

    })
});