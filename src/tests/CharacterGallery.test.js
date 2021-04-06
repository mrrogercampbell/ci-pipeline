import CharacterGallery from '../components/CharacterGallery'
import { shallow } from 'enzyme'

// Test 1: Write a test that checks to see if our `CharacterGallery` component renders without throwing an error.
it('CharacterGallery Component Renders Without Error', () => {
    const wrapper = shallow(<CharacterGallery />)
})