import { render } from '@testing-library/react'

import Pagination from './Pagination'

describe('Pagination component', () => {
    const renderComponent = (props) => {
        return render(<Pagination {...props}/>)
    }

    it('Componente should defined', () => {
        const { getByTestId } = renderComponent()

        const element = getByTestId('pagination')

        expect(element).toBeDefined()
    })

    it('Componente should render', () => {

        const { getByTestId } = renderComponent()

        const element = getByTestId('pagination')

        expect(element).toMatchSnapshot()
    })

    it('Componente should render pagination current 5 and total page 50', () => {
        const props = {
            totalPages: 50,
            currentPage: 5
        }

        const { getByTestId } = renderComponent(props)

        const element = getByTestId('pagination')

        expect(element).toMatchSnapshot()
    })

})