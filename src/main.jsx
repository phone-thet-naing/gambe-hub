import React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import theme from './theme'
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
