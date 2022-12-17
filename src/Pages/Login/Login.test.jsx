import { render, screen } from "@testing-library/react"
import Login from "./Login"

describe('Comportamento do Login', () => {
    test('Quando o input esta vazio, o botão ficará desabilitado', () => {
        render (
            <Login/>
        )
        const inputName = screen.getByPlaceholderText('Ash Ketchum');
        const inputPassword = screen.getByLabelText('Senha')
        const button = screen.getByRole('button')

        expect(inputName).toBeInTheDocument()
        expect(inputPassword).toBeInTheDocument()
        expect(button).toBeDisabled()

    })
})