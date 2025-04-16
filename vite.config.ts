import {resolve} from 'path';

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import hq from 'alias-hq';
import external from '@yelo/rollup-node-external';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: hq.get('rollup'),
    },
    plugins: [react(), dts({rollupTypes: true})],
    build: {
        sourcemap: true,
        copyPublicDir: false,
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, './src/lib/index.ts'),
            name: 'react-quick-calculator',
            // the proper extensions will be added
            fileName: 'index',
            cssFileName: 'style',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: external(),
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: 'React',
                    'react/jsx-runtime': 'jsxRuntime',
                    'react-draggable': 'react-draggable',
                    mathjs: 'mathjs',
                },
            },
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
    },
});
