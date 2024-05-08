import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Providers } from './components';
import { router } from './routes';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
      <ToastContainer />
    </Providers>
  );
}

export default App;
