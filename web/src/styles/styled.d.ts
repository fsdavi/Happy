import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        landing: string,

        colors: {
            primary: string,
            secundary: string
        },

        background: string
    }
}