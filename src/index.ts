import {
  createSimpleEventRegistration,
  createSimplePlugin,
} from '@board-bound/sdk'
import { version, name } from '../package.json'
import { PluginConfig } from './config'
import ExampleEvent from './event'

export default createSimplePlugin<PluginConfig>({
  name,
  version: version as 'IN-DEV',
  serverVersion: '>=1.0.0 <2.0.0',
  author: 'scolastico',
  events: [
    ExampleEvent,
    createSimpleEventRegistration('serverStatusRequest', (_, e) => {
      e.response.set({ ...e.response.get(), example: 'example' })
      return false
    }),
  ],
  defaultConfig: {
    foo: 'bar',
  },
  onEnable: (cfg, bus, log) => {
    log.info('Example plugin enabled! Foo is ' + cfg.foo)
  },
})
