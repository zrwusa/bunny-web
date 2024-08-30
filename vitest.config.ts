import {defineConfig} from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",

        exclude: [
            'node_modules',           // ignored by default
            'dist',                   // Ignore the packaged files
            'coverage',               // Ignore test coverage files
            'cypress',
            'trash/**',               // Ignore specific directories
            '**/ignored-test-file.ts' // Ignore specific files
        ],
    },
});
