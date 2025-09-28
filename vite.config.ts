import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import svg from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        svg()
    ],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
        }
    }
})
