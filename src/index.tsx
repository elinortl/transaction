import * as React from 'react';
import { render } from 'react-dom';

import TransactionsScreen from './containers/TransactionsScreen';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TransactionsScreen />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
