import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar "test-1" na lista', () =>{
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-tarefa'), {
            target: { value: 'test-1'}
        })
        fireEvent.click(screen.getByTestId('btn-tarefa'))
        expect(screen.getByText('test-1')).toBeInTheDocument()
    })
    test('Deve adicionar "test-2" na lista', () =>{
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-tarefa'), {
            target: { value: 'test-2'}
        })
        fireEvent.click(screen.getByTestId('btn-tarefa'))
        expect(screen.getByText('test-2')).toBeInTheDocument()
    })
});