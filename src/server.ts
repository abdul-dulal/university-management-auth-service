import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function main() {
  console.log(config.port)
  try {
    await mongoose.connect(config.database_url as string)
    console.log('db connected')
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    error.message
  }
}

main()
