import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { CssBaseline, Typography } from '@mui/material';
import { ThemeProviderWrapper } from './context/theme-context.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.tsx';
import About from './pages/about.tsx';
import Contact from './pages/contact.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Traditional from './pages/traditional.tsx';
import ReactQuery from './pages/react-query.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { makeServer } from './services/mirage-server.ts';
import Mutations from './pages/mutations.tsx';
import ErrorPage from './pages/errors/error-page.tsx';
import ForbiddenPage from './pages/errors/forbidden.tsx';
import ServerErrorPage from './pages/errors/server-error.tsx';
import NotFoundPage from './pages/errors/not-found.tsx';
import ChartPage from './pages/chart.tsx';
import WindowSize from './pages/custom/window-size.tsx';
import ScrollPositionComponent from './pages/custom/scroll-position.tsx';
import Debounce from './pages/custom/debounce.tsx';
import FormValidation from './pages/custom/form-validation.tsx';
import FetchList from './pages/custom/fetch-list.tsx';
import FetchById from './pages/custom/fetch-list-by-id.tsx';
import CreateResource from './pages/custom/create-resource.tsx';
import GridExample from './pages/data-visual.tsx';
import FetchData from './pages/custom/fetch-data.tsx';
import CRUDPage from './pages/custom/crud.tsx';
import { ToastContainer } from 'react-toastify';
import FormPage from './pages/form-page.tsx';
import { AutoCompletePage } from './pages/autocomplete-page.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'traditional',
        element: <Traditional />,
      },
      {
        path: 'react-query',
        element: <ReactQuery />,
      },
      {
        path: 'mutations',
        element: <Mutations />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'chart',
        element: <ChartPage />,
      },
      {
        path: "data-visual",
        element: <GridExample />
      },
      {
        path: "form-builder",
        element: <FormPage />
      },
      {
        path: "auto-complete",
        element: <AutoCompletePage />
      },
      {
        path: 'custom-hooks',
        children: [
          {
            path: '',
            element: <Typography variant="h4">Select a custom hook from the Menu</Typography>,
          },
          {
            path: 'use-debounce',
            element: <Debounce />, 
          },
          {
            path: 'use-window-size',
            element: <WindowSize />, 
          },
          {
            path: 'use-scroll-position',
            element: <ScrollPositionComponent />, 
          },
          {
            path: 'use-form-validation',
            element: <FormValidation />, 
          },
          {
            path: 'use-fetch-list',
            element: <FetchList />, 
          },
          {
            path: 'use-fetch-by-id',
            element: <FetchById />, 
          },
          {
            path: 'use-create-resource',
            element: <CreateResource />, 
          },
          {
            path: 'use-fetch-data',
            element: <FetchData />, 
          },
          {
            path: "crud",
            element: <CRUDPage />,
          }
          
        ],
      },
      { path: 'forbidden', element: <ForbiddenPage /> },
      { path: 'server-error', element: <ServerErrorPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

if (process.env.NODE_ENV === 'development') {
  makeServer();
}
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProviderWrapper>
          <CssBaseline />
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer />
        </ThemeProviderWrapper>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
