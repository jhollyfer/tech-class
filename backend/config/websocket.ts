import { defineConfig } from 'adonisjs-websocket'

const websocketConfig = defineConfig({
  middleware: [],
  redis: {
    enabled: false,
  },
})

export default websocketConfig
