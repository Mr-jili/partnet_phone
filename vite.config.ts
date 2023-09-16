import { type ConfigEnv, type UserConfigExport } from "vite"
import vue from "@vitejs/plugin-vue"
import path, { resolve } from "path"
import sass from 'sass'

export default (configEnv: ConfigEnv): UserConfigExport => {
    return {
        base: './',
        resolve: {
            alias: {
                "@": resolve(__dirname, "./src")
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    implementation: sass,
                },
            },
        },
        server: {
            https: false,
            host: true,
            port: 3000,
            open: false,
            cors: true,
            strictPort: false,
            proxy: {
                "/api/v1": {
                    target: "",
                    ws: true,
                    changeOrigin: true
                }
            }
        },
        build: {
            chunkSizeWarningLimit: 2048,
            reportCompressedSize: false,
            assetsDir: "static",
            rollupOptions: {
                output: {
                    manualChunks: {
                        vue: ["vue", "vue-router", "pinia"],
                        element: ["element-plus", "@element-plus/icons-vue"]
                    }
                }
            }
        },
        esbuild: {
            pure: ["console.log"],
            drop: ["debugger"],
            legalComments: "none"
        },
        plugins: [
            vue()
        ]
    }
}