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
        const inputEmail = screen.getByLabelText('E-mail:');
        const inputPassword = screen.getByLabelText('Password:')
        const button = screen.getByText('Login')

        expect(inputEmail).toBeInTheDocument()
        expect(inputPassword).toBeInTheDocument()
        expect(button).toBeDisabled()

    })

    test("Quando preenchidos os inputs, o botão ficará habilitado", () => {
        render (
            <BrowserRouter>
                <Login/>
            </BrowserRouter>
        )
        const inputEmail = screen.getByLabelText('E-mail:');
        const inputPassword = screen.getByLabelText('Password:')
        const button = screen.getByText('Login')

        expect(inputEmail).toBeInTheDocument()
        expect(inputPassword).toBeInTheDocument()
        fireEvent.change(inputEmail, {
            target: {
                value: 'Ash@Ketchum.com'
            }
        })
        fireEvent.change(inputPassword, {
            target: {
                value: 'password123'
            }
        })
        expect(button).not.toBeDisabled()
    })
})