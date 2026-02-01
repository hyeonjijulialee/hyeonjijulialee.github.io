/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
                serif: ['Cormorant Garamond', 'Georgia', 'serif'],
            },
            fontSize: {
                'editorial-lg': ['1.125rem', { lineHeight: '1.85' }],
                'editorial-base': ['1rem', { lineHeight: '1.8' }],
            },
            colors: {
                // Sky Blue Palette
                brand: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#66CCFF', // Main
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
                // Lemon Palette
                accent: {
                    50: '#ffffe0',
                    100: '#ffffcc',
                    200: '#ffff99',
                    300: '#ffff66',
                    400: '#ffff33',
                    500: '#FFFF00', // Main
                    600: '#e6e600',
                    700: '#cccc00',
                    800: '#999900',
                    900: '#666600',
                    950: '#333300',
                },
                // Neutral Slate
                slate: {
                    50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
                    400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
                    800: '#1e293b', 900: '#0f172a', 950: '#020617',
                },
                stone: {
                    50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1',
                    400: '#a8a29e', 500: '#78716c', 600: '#57534e', 700: '#44403c',
                    800: '#292524', 900: '#1c1917', 950: '#0c0a09',
                },
                primary: {
                    DEFAULT: '#2C5070',
                    hover: '#234560',
                }
            },
            boxShadow: {
                'lemon': '0 10px 40px -10px rgba(255, 255, 0, 0.4)',
                'blue': '0 10px 40px -10px rgba(102, 204, 255, 0.25)',
            }
        }
    },
    plugins: [],
}
