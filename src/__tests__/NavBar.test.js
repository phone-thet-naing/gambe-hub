import NavBar from '../components/Navbar'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { createRoot } from 'react-dom/client'

jest.mock('HStack', () => 'HStack')
jest.mock('Image', () => 'Image')


describe('NavBar component', () => {
    it('testing library', async () => {
        render(<NavBar />)

        expect(screen).toMatchSnapshot()
    })

    it.only('snapshot test', async () => {
        const tree = renderer.create(<NavBar />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})

