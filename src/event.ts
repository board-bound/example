import { createSimpleEventRegistration } from '@board-bound/sdk'

export default createSimpleEventRegistration(
  'serverAcceptingConnections',
  (s, e) => {
    s.getLogger('example').debug(
      'The plugin got told that the server is accepting connections.',
      e
    )
    return true
  }
)
