import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Login from "./Login"

describe('Comportamento do Login', () => {
    test('Quando o input esta vazio, o botão ficará desabilitado', () => {
        render (
            <BrowserRouter>
                <Login/>
            </BrowserRouter>
        )
        const inputName = screen.getByLabelText('Nome:');
        const inputPassword = screen.getByLabelText('Senha:')
        const button = screen.getByText('Login')

        expect(inputName).toBeInTheDocument()
        expect(inputPassword).toBeInTheDocument()
        expect(button).toBeDisabled()

    })

    test("Quando preenchidos os inputs, o botão ficará habilitado", () => {
        render (
            <BrowserRouter>
                <Login/>
            </BrowserRouter>
        )
        const inputName = screen.getByLabelText('Nome:');
        const inputPassword = screen.getByLabelText('Senha:')
        const button = screen.getByText('Login')

        expect(inputName).toBeInTheDocument()
        expect(inputPassword).toBeInTheDocument()
        fireEvent.change(inputName, {
            target: {
                value: 'Ash Ketchum'
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