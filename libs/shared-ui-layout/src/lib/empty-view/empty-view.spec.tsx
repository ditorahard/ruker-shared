import React from 'react';
import { render } from '@testing-library/react-native';

import EmptyView from './empty-view';

describe('EmptyView', () => {
  it('should render successfully', () => {
    const { container } = render(<EmptyView />);
    expect(container).toBeTruthy();
  });
});
