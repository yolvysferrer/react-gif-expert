import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
    const category = 'One Punch';
    test('debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })
        render(<GifGrid category={category}/>)
        // screen.debug()
        expect(screen.getByText('Cargando...')).toBeTruthy()
        expect(screen.getByText(category)).toBeTruthy()
    });
    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [
        {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://dawdadawd.com/Saitama',
        },
        {
            id: '123',
            title: 'Saitama2',
            url: 'https://dawdadawd.com/Saitama2',
        }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })
        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2);

    })
});