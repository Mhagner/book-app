import { render } from '@testing-library/react'

import Logo from './Logo'

describe('Logo component', () => {
    const renderComponent = (props) => {
        return render(<Logo {...props}/>)
    }

    it('Componente should defined', () => {
        const { getByTestId } = renderComponent()

        const element = getByTestId('logo')

        expect(element).toBeDefined()
    })

    it('Componente should render logo light default', () => {

        const { getByTestId } = renderComponent()

        const element = getByTestId('logo')

        expect(element).toMatchSnapshot()
    })

    it('Componente should render logo dark', () => {
        const props = {
            color: 'dark'
        }

        const { getByTestId } = renderComponent(props)

        const element = getByTestId('logo')

        expect(element).toMatchSnapshot()
    })

})