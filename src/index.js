import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/Error/ErrorPage';
import MainPage from './pages/Home/MainPage';
import MoviesPage from './pages/Movies/MoviesPage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/movies',
        element: <MoviesPage />,
      },
      {
        path: '/movie/:movieId',
        element: <MovieDetail />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </QueryClientProvider>
);
