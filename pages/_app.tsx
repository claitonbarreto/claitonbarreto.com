import { useContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import AppContext, { Context, Theme } from 'src/context/Theme'
import GlobalStyle from '../src/globalStyle'
import { dark,light } from '../src/themes'
import Root from './_root'

export default function App({ Component, pageProps }) {

  return (
    <AppContext>
      <Root Component={Component} pageProps={pageProps}/>
    </AppContext>
  )
}
