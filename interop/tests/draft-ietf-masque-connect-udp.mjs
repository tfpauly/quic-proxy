export default
{
    "description": "Interoperability test results for The CONNECT-UDP HTTP Method", 
    "tests": [
        {
            "kind": "must", 
            "name": "Client sends  `:authority` in `CONNECT-UDP` requests", 
            "id": "connect-udp-authority"
        }, 
        {
            "kind": "must", 
            "name": "Client does not include  `:scheme` and `:path` in `CONNECT-UDP` requests", 
            "id": "connect-udp-no-scheme-path"
        }, 
        {
            "kind": "must", 
            "name": "Server does not include  `Transfer-Encoding` or `Content-Length` in `CONNECT-UDP` responses", 
            "id": "connect-udp-no-content-length"
        }, 
        {
            "kind": "must", 
            "name": "Client rejects responses that include  `Transfer-Encoding` or `Content-Length` in `CONNECT-UDP` responses", 
            "id": "connect-udp-reject-content-length"
        }, 
        {
            "kind": "supported", 
            "name": "Supports HTTP/3 datagrams by sending `H3_DATAGRAM` in `SETTINGS`", 
            "id": "connect-udp-datagram"
        }, 
        {
            "kind": "must", 
            "name": "Proxy echoes `Datagram-Flow-Id` header in successful replies", 
            "id": "connect-udp-flow-id-echo"
        }, 
        {
            "kind": "supported", 
            "name": "When HTTP/3 datagrams are not supported, sends datagrams on a stream using a 16-bit length field", 
            "id": "connect-udp-lv"
        }, 
        {
            "kind": "must", 
            "name": "Server discards UDP packets that do not match any client's request", 
            "id": "connect-udp-validate-tuple"
        }
    ], 
    "name": "The CONNECT-UDP HTTP Method", 
    "id": "draft-ietf-masque-connect-udp.mjs"
}