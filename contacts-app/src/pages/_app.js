import Navbar from '@/components/Navbar'
import { store } from '@/redux/store'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return <Provider  store={store}>
  <ChakraProvider>
    <Navbar/>
  <Component {...pageProps} />
  </ChakraProvider>
  </Provider>
}
