import { render } from '@testing-library/react';

import AnimeLog from './anime-log';

describe('AnimeLog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AnimeLog />);
    expect(baseElement).toBeTruthy();
  });
});
