/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');

module.exports = {
    // mode: 'jit',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
        "!./node_modules",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#0d0c22',
                secondary: '#565564',
                gradient_1: '#0052CC',
                gradient_2: '#2196F3',
                gray: {
                    1: '#FAFAFA',
                    2: '#F5F5F5',
                    3: '#EEEEEE',
                    4: '#E0E0E0',
                    5: '#BDBDBD',
                    6: '#9E9E9E',
                    7: '#757575',
                    8: '#616161',
                    9: '#424242',
                    10: '#212121',
                },
                blue: {
                    1: '#E3F2FD',
                    2: '#BBDEFB',
                    3: '#90CAF9',
                    4: '#64B5F6',
                    5: '#42A5F5',
                    6: '#2196F3',
                    7: '#1E88E5',
                    8: '#1976D2',
                    9: '#1565C0',
                    10: '#0D47A1',
                },
                success: {
                    1: '#E8F5E9',
                    2: '#C8E6C9',
                    3: '#A5D6A7 ',
                    4: '#81C784',
                    5: '#66BB6A',
                    6: '#4CAF50',
                    7: '#43A047',
                    8: '#388E3C',
                    9: '#388E3C',
                    10: '#1B5E20',
                },
                warning: {
                    1: '#FFF8E1',
                    2: '#FFECB3',
                    3: '#FFE082',
                    4: '#FFD54F',
                    5: '#FFCA28',
                    6: '#FFC107',
                    7: '#FFB300',
                    8: '#FFA000',
                    9: '#FF8F00',
                    10: '#FF6F00',
                },
                danger: {
                    1: '#FFEBEE',
                    2: '#FFCDD2',
                    3: '#EF9A9A',
                    4: '#E57373',
                    5: '#EF5350',
                    6: '#F44336',
                    7: '#E53935',
                    8: '#D32F2F',
                    9: '#C62828',
                    10: '#B71C1C',
                },
                info: {
                    1: '#E3F2FD',
                    2: '#BBDEFB',
                    3: '#90CAF9',
                    4: '#64B5F6',
                    5: '#42A5F5',
                    6: '#2196F3',
                    7: '#1E88E5',
                    8: '#1976D2',
                    9: '#1565C0',
                    10: '#0D47A1',
                },
            },
            fontFamily: {
                'roboto': ['Roboto', 'sans-serif']
            },
            keyframes: {
                bouncy: {
                    '0%, 100%': { transform: 'translateY(-5px)' },
                    '50%': { transform: 'translateY(5px)' },

                },
                fadeup: {
                    '0%': { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
                    '100%': { transform: 'translate3d(0, 0, 0)', opacity: 1 },
                },
                faderight: {
                    '0%': { transform: 'translate3d(-30px, 0, 0)', opacity: 0 },
                    '100%': { transform: 'translate3d(0, 0, 0)', opacity: 1 },
                },
                fadeleft: {
                    '0%': { transform: 'translate3d(30px, 0, 0)', opacity: 0 },
                    '100%': { transform: 'translate3d(0, 0, 0)', opacity: 1 },
                },
                fadeupSm: {
                    '0%': { transform: 'translate3d(0, 20px, 0)', opacity: 0 },
                    '100%': { transform: 'translate3d(0, 0, 0)', opacity: 1 },
                },
                fadedown: {
                    '0%': { transform: 'translate3d(0, -30px, 0)', opacity: 0 },
                    '100%': { transform: 'translate3d(0, 0, 0)', opacity: 1 },
                },
                fadedownSm: {
                    '0%': { transform: 'translate3d(0, -20px, 0)', opacity: 0 },
                    '100%': { transform: 'translate3d(0, 0, 0)', opacity: 1 },
                },
                zoomOut: {
                    '0%': { transform: 'scale(0%)', opacity: 0 },
                    '100%': { transform: 'scale(100%)', opacity: 1 },
                },
                spin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(-359deg)' },
                },
                spinRight: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(359deg)' },
                },
            },
            animation: {
                bouncy: 'bouncy 1s ease-in-out infinite',
                fadeup: 'fadeup 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                faderight: 'faderight 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fadeleft: 'fadeleft 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fadeupSm: 'fadeupSm 0.15s',
                zoomOut: 'zoomOut 0.3s',
                fadedown: 'fadedown 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fadedownSm: 'fadedownSm 0.15s',
                spin: 'spin 0.8s infinite',
                spinRight: 'spinRight 0.8s infinite'
            },
            screens: {
                'responsive-nav': '992px',
                'sm': '600px',
            },
            boxShadow: {
                100: '0px 4px 30px',
                200: '0px 10px 30px',
            },
            dropShadow: {
                100: '0px 4px 30px',
                200: '0px 10px 30px',
            },
            opacity: {
                15: "0.15"
            }
        },
    },
    variants: {
        extend: {
            borderStyle: ['important', 'hover', 'last'],
            borderColor: ['important', 'hover', 'last'],
            borderWidth: ['important', 'hover', 'last'],
            borderRadius: ['important', 'hover', 'last'],
            textColor: ['important', 'hover', 'first', 'last'],
            height: ['important', 'hover', 'first', 'last'],
            width: ['important', 'hover', 'first', 'last'],
            backgroundColor: ['important', 'hover', 'first', 'last'],
            padding: ['important', 'hover', 'first', 'last'],
            position: ['important', 'hover', 'first', 'last'],
            display: ['important', 'hover', 'first', 'last'],
            cursor: ['important', 'hover', 'first', 'last'],
            pointerEvents: ['important', 'hover', 'first', 'last'],
            zIndex: ['important', 'hover', 'first', 'last'],
            maxHeight: ['important', 'hover', 'first', 'last'],
            overflow: ['important', 'hover', 'first', 'last'],
            margin: ['important', 'hover', 'first', 'last'],
            order: ['important', 'hover', 'first', 'last'],
        }
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('important', ({ container }) => {
                container.walkRules(rule => {
                    rule.selector = `.\\!${rule.selector.slice(1)}`
                    rule.walkDecls(decl => {
                        decl.important = true
                    })
                })
            })
        }),
        plugin(function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        }),
    ],
    corePlugins: {
        preflight: false,
    }
}
