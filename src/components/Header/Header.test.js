import { render } from '@testing-library/react'
import { AuthProvider, useAuthContext } from '../../context/authContext'

import Header from './Header'

describe('Header component', () => {
    const renderComponent = () => {
        return render(<Header />)
    }

    it('Componente should defined', () => {
        const { getByTestId } = renderComponent()

        const element = getByTestId('header')

        expect(element).toBeDefined()
    })

    it('Componente should render', () => {

        const { getByTestId } = renderComponent()

        const element = getByTestId('header')

        expect(element).toMatchSnapshot()
    })

})