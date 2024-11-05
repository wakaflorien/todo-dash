import '@testing-library/jest-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import todosReducer  from './app/slices/todosSlice';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    },
  },
});

const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      todos: todosReducer,
    },
    preloadedState: initialState,
  });
};

const AllTheProviders = ({ children, initialState }) => {
  const store = createTestStore(initialState);
  
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </Provider>
  );
};

const customRender = (ui, { initialState, ...options } = {}) =>
  render(ui, { wrapper: (props) => <AllTheProviders {...props} initialState={initialState} />, ...options });

export * from '@testing-library/react';

export { customRender as render };