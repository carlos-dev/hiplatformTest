import {render} from '@testing-library/react';
import Checkbox from '.';

it('should render the checkbox correctly', () => {
  const {debug} = render (
    <Checkbox
      label={"name"}
      name="node"
      id={"true"}
      checked={true}
      onChange={() => {}}
    /> 
  )

  debug();
})