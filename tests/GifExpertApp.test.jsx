import { render, renderHook, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <gifExpertApp/>', () => {
    test('Debe retornar el estado inicial', () => {
        const newCategory = "Dragon Ball";
        render(<GifExpertApp/>)
        screen.debug();
        // const { result } = renderHook(() => useState('One Punch'));
        // console.log(result)
      
    });
});