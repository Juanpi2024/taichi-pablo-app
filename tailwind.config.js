
export default {
    content: [
        "./index.html",
        "./App.tsx",
        "./index.tsx",
        "./views/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#12e269",
                "warning": "#fbbf24",
                "danger": "#ef4444",
                "background-dark": "#102218",
                "surface-dark": "#1c2720",
                "surface-light": "#ffffff",
                "glass": "rgba(16, 34, 24, 0.75)",
                "border-dark": "#3b5445",
                "text-muted": "#9db9a8",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "body": ["Inter", "sans-serif"],
                "noto": ["Noto Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
}
