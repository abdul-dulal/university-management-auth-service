import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger } from './share/logger'
import { Server } from 'http'
import { infoLogger } from './share/logger'
import { loggers } from 'winston'

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

let server: Server
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    infoLogger.info('db connected')
    server = app.listen(config.port, () => {
      infoLogger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('fail to connect database', error.message)
  }

  process.on('unhandledRejection', error => {
    console.log('unhandledRejection we are closeing our server')
    if (server) {
      server.close(() => {
        errorLogger.error(error)
      })
      process.exit(1)
    } else {
      process.exit(1)
    }
  })
}

main()
process.on('SIGTERM', () => {
  loggers.info('sigterm is recived')
  if (server) {
    server.close()
  }
})
