import NavBar from '../components/Navbar'
import renderer from 'react-test-renderer'

jest.mock('HStack', () => 'HStack')
jest.mock('Image', () => 'Image')

it('navbar renders correctly', () => {
    const navbar = renderer.create(<NavBar />).toJSON();
    expect(navbar).toMatchSnapshot();
})