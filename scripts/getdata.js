/* eslint-disable no-console */
const fse = require('fs-extra')
const POSTCONFIG = require('../post.config')
const customFetcher = require('./dataFetcher')

const getData = async () => {
  const dataToWrite = {
    stories: [],
  }
  for (const doc of POSTCONFIG.docs) {
    const data = await customFetcher(doc.id)
    if (data) {
      const key = data.type.trim()
      if (key === 'bio') {
        dataToWrite.bios = data.bios
      } else if (key === 'story') {
        dataToWrite.stories.push(data)
      } else if (key === 'about') {
        dataToWrite.main = data
      }
    }
  }
  console.log('DATTT___-->', dataToWrite)

  if (dataToWrite) {
    fse.outputFile(POSTCONFIG.dataPath, JSON.stringify(dataToWrite))
  }
}

getData()
