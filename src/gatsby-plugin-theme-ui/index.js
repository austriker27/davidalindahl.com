// src/gatsby-plugin-theme-ui/index.js

import baseTheme from '@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui'

export default {
    ...baseTheme,
    colors: {
        ...baseTheme.colors,
        primary: '#FF269E',
        secondary: '#A832D7',
        success: '#F1F5F9',
        background: '#181527',
        surface: '#393939',
    },
}

// export default {
//     ...baseTheme,
//     colors: {
//         ...baseTheme.colors,
//         primary: '#FF4081',
//         secondary: '#03A9F4',
//         success: '#FFEB3B',
//         background: '#232323',
//         surface: '#393939',
//     },
// }