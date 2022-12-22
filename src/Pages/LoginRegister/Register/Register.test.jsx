import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Register from "./Register"

describe('Comportamento do Register', () => {
    test('Quando o input esta vazio, o botão ficará desabilitado', () => {
        render (
            <BrowserRouter><Register/></BrowserRouter>
        )
        const inputName = screen.getByLabelText('Nome:');
        const inputEmail = screen.getByLabelText('E-mail:')
        const inputPassword = screen.getByLabelText('Senha:')
        const button = screen.getByText('Cadastrar')

        expect(inputName).toBeInTheDocument()
        expect(inputEmail).toBeInTheDocument()
        expect(inputPassword).toBeInTheDocument()
        expect(button).toBeDisabled()

    })
    test("Quando preenchidos os inputs, o botão ficará habilitado", () => {
        render (
            <BrowserRouter>
                <Register/>
            </BrowserRouter>
        )
        const inputName = screen.getByLabelText('Nome:');
        const inputEmail = screen.getByLabelText('E-mail:')
        const inputPassword = screen.getByLabelText('Senha:')
        const button = screen.getByText('Cadastrar')

        expect(inputName).toBeInTheDocument()
        expect(inputEmail).toBeInTheDocument()
        expect(inputPassword).toBeInTheDocument()
        fireEvent.change(inputName, {
            target: {
                value: 'Ash Ketchum'
            }
        })
        fireEvent.change(inputEmail, {
            target: {
                value: 'Ash@Ketchum.com'
            }
        })
        fireEvent.change(inputPassword, {
            target: {
                value: '123'
            }
        })
        expect(button).not.toBeDisabled()
    })
})