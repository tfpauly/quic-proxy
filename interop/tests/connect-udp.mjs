
export default

{
  name: 'Connect-UDP',
  id: 'connect-udp',
  description: 'Specification support for draft-ietf-masque-connect-udp-00',
  tests: [
    {
      name: 'The client supports CONNECT-UDP over HTTP/3',
      id: 'connect-udp-h3-client',
      kind: 'supported',
    },
    {
      name: 'The client supports CONNECT-UDP over HTTP/2',
      id: 'connect-udp-h2-client',
      kind: 'supported',
    },
    {
      name: 'The server supports CONNECT-UDP over HTTP/3',
      id: 'connect-udp-h3-server',
      kind: 'supported',
    },
    {
      name: 'The server supports CONNECT-UDP over HTTP/2',
      id: 'connect-udp-h2-server',
      kind: 'supported',
    },
    {
      name: 'Requests include `:method` and `:authority`, but not `:scheme` or `:path`',
      id: 'connect-udp-pseudo-headers',
      kind: 'must',
    },
    {
      name: 'Client requests over HTTP/3 include `Datagram-Flow-Id`',
      id: 'connect-udp-flow-id-client',
      kind: 'should',
    },
    {
      name: 'Server responses echo `Datagram-Flow-Id`',
      id: 'connect-udp-flow-id-echo',
      kind: 'must',
    },
  ]
}
