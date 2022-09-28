import React from 'react';
import { render } from '@testing-library/react-native';

import Layout from './layout';

describe('Layout', () => {
  it('should render successfully', () => {
    const { container } = render(<Layout />);
    expect(container).toBeTruthy();
  });
});
