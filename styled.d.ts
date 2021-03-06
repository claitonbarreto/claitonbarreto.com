import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        background:string
        text:string
        primary:string,
        negative:string,
        shadow:string,
        border:string,
        absoluteBackground:string,
    }
}