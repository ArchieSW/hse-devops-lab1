import { render } from '@testing-library/svelte';
import App from '../src/App.svelte';

describe('HelloWorld', () => {
  it('renders the correct message', () => {
    const { getByText } = render(App);
    expect(getByText('Мое резюме')).toBeInTheDocument();
  });
});
