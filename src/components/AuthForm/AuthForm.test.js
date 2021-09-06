import { render } from '@testing-library/react'

import AuthForm from './AuthForm'

describe('AuthForm component', () => {
    const renderComponent = () => {
        return render(<AuthForm />)
    }

    it('Componente should defined', () => {
        const { getByTestId } = renderComponent()

        const element = getByTestId('auth-form')

        expect(element).toBeDefined()
    })

    it('Componente should render', () => {

        const { getByTestId } = renderComponent()

        const element = getByTestId('auth-form')

        expect(element).toMatchSnapshot()
    })

})