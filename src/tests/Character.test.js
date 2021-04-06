import Character from '../components/Character'
import { shallow } from 'enzyme'

// Test 1: Write a test that checks to see if our `Character` component renders without throwing an error.
it('Character Component Renders Without Error', () => {
    const wrapper = shallow(<Character />)
})