import { componentRender } from '06_shared/lib/tests/componentRender'
import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    test('render Sidebar', () => {
        componentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        screen.debug()
    })

    test('toggle Sidebar', () => {
        componentRender(<Sidebar />)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar').classList.contains('isOpen')).toBe(false)
        screen.debug()
    })
})
