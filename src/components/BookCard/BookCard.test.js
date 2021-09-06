import { render } from '@testing-library/react'

import BookCard from './BookCard'

describe('BookCard component', () => {
    const renderComponent = (props) => {
        return render(<BookCard {...props} />)
    }

    it('Componente should defined', () => {
        const { getByTestId } = renderComponent()

        const element = getByTestId('book-card')

        expect(element).toBeDefined()
    })

    it('Componente should render', () => {
        const props = {
            alt: 'alt',
            title: 'title',
            image: 'img/image.svg',
            pageCount: 200,
            publisher: 'Editora test',
            published: 2021,
            authors: ['Mahilson', 'Hagnner']
        }

        const { getByTestId } = renderComponent(props)

        const element = getByTestId('book-card')

        expect(element).toMatchSnapshot()
    })

})