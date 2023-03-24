import { renderWithTranslation } from '06_shared/lib/tests/renderWithTranslation'
import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    test('render Sidebar', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument
    })

    test('toggle Sidebar', () => {
        renderWithTranslation(<Sidebar />)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar').classList.contains('isOpen')).toBe(false)
        screen.debug()
    })
})
