import { render,screen } from '@testing-library/react';
import {GifItem} from '../../src/components/GifItem'


describe('Pruebas en <GifItem/>', () => { 
    const img = {
        url:'https://prueba.com/',
        title:'Esto es una prueba'
    } 
    test('debe hacer match con el SnapShot', () => {
       
        const container = render(<GifItem {...img}/>)
        expect(container).toMatchSnapshot();
     });
    test('debe mostrar la imagen con el URL y el ALT indicado', () => { 
        render(<GifItem {...img}/>)
        // // screen.debug()
        // expect(screen.getByRole('img').src).toBe(img.url)
        // expect(screen.getByRole('img').alt).toBe(img.title)
        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(img.url);
        expect(alt).toBe(img.title); 
     
    });
    test('debe mostrar el titulo en el componente', () => { 
        render(<GifItem {...img}/>)
        expect(screen.getByText(img.title)).toBeTruthy();
    });
});