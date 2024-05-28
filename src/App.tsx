import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {axiosConfig, MainRouter, ModalProvider, routes, ThemeContextProvider} from "@package/util";
import '@package/assets/style'

function App() {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                gcTime: 500,
            },
        },
    });

    axiosConfig({
        // baseURL:import.meta.env.REACT_API_KEY,
        // baseURL:import.meta.env.REACT_API,
        // authorization:import.meta.env.REACT_API_KEY
        baseURL:'https://developer-lostark.game.onstove.com/',
        authorization:'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyMDgzODUifQ.X2MZqpjk0I1a1iFmgArvHRvWgnOFO3pUSZG4jlvdUDA_KRe3PJ8Fd3VqvMN8XvxeRvqGHxw4TPkpw9Xrkni7dT4b_oEO1g82VdyidBDmGPXq4RowMNjuZAD25iqtQx0bo7ALQjllcFWDXvmGZ4XjF_j1XLbjBtAeQFNQmmqfM33qBkH-Uos5eovrIcZb_q6AkIH_BFP-1sgby6UWnFewJZ8mGA-YLI5f0toy0_0Gsk2rBgxNGKZayyUF8gL5b6LH-TNsvsPjwrH2jjQkoAUQPXBwG-Xt3Vc2gXTWv8VoLITlHjzOV9nnxPPZCEbYg_c3c-eQuy1yVA2nw9Zm1yKjvQ'
    })

  return (
      <ThemeContextProvider>
        <QueryClientProvider client={client}>
          <BrowserRouter>
              <ModalProvider>
                  <Suspense>
                      <MainRouter
                          routes={routes}
                      />
                  </Suspense>
              </ModalProvider>
          </BrowserRouter>
      </QueryClientProvider>
      </ThemeContextProvider>
  )
}

export default App
