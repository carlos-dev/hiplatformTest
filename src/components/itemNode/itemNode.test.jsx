import {render} from '@testing-library/react';
import ItemNode from '.';

it('should render the ItemNode correctly', () => {
  const {debug} = render (
    <ItemNode
      node={{
        children: {},
        id: "3b31d360-a39b-420e-9ec4-aa131a7b0651",
        level: 0,
        name: "Paul Murray"
      }}
    />
  )

  debug();
})