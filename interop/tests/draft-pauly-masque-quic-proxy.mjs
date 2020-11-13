export default
{
    "description": "Interoperability test results for QUIC-Aware Proxying Using CONNECT-UDP", 
    "tests": [
        {
            "kind": "must", 
            "name": "Client sends `Datagram-Flow-Id` in all `CONNECT-UDP` requests", 
            "id": "connect-udp-datagram-flow-id"
        }, 
        {
            "kind": "must", 
            "name": "Client sends the same `:authority` in all requests for the same connection", 
            "id": "connect-udp-authority"
        }, 
        {
            "kind": "should", 
            "name": "Client sends the same `Datagram-Flow-Id` in all requests for the same connection",
            "id": "connect-udp-datagram-flow-id-match"
        }, 
        {
            "kind": "must", 
            "name": "Client sends exactly one `*-Connection-Id ` in each request",
            "id": "connect-udp-quic-cids"
        }, 
        {
            "kind": "must", 
            "name": "Client sends `Client-Connection-Id` in first `CONNECT-UDP` request", 
            "id": "connect-udp-quic-client-cid"
        }, 
        {
            "kind": "supported", 
            "name": "Client sends `DATAGRAM` frames in the same flight as the `CONNECT-UDP` request", 
            "id": "connect-udp-early-data"
        }, 
        {
            "kind": "must", 
            "name": "Client does not reuse a `Datagram-Flow-Id` that has been rejected", 
            "id": "connect-udp-rejected-flow-id"
        }, 
        {
            "kind": "must", 
            "name": "Client does not reuse a `Client-Connection-Id` that has been rejected", 
            "id": "connect-udp-rejected-conn-id"
        }, 
        {
            "kind": "must", 
            "name": "Client sends a new request prior to sending `NEW_CONNECTION_ID` frames", 
            "id": "connect-udp-new-client-cid"
        }, 
        {
            "kind": "supported", 
            "name": "Client supports forwarded mode", 
            "id": "connect-udp-forwarded-mode"
        }, 
        {
            "kind": "must", 
            "name": "Client only uses forwarded mode with short header packets", 
            "id": "connect-udp-forwarded-sh"
        }, 
        {
            "kind": "must", 
            "name": "Client does not use forwarded mode prior to receiving a `2xx (OK)`", 
            "id": "connect-udp-forwarded-sh-wait"
        }, 
        {
            "kind": "must", 
            "name": "Client does not use forwarded mode if the server sends a `409 (Conflict)`", 
            "id": "connect-udp-forwarded-rejected"
        }, 
        {
            "kind": "should", 
            "name": "Client stops sending requests for forwarded mode if the server sends an error other than `409 (Conflict)`", 
            "id": "connect-udp-forwarded-stop"
        }, 
        {
            "kind": "must", 
            "name": "Client supports receiving forwarded packets from proxy", 
            "id": "connect-udp-forwarded-receive"
        }, 
        {
            "kind": "must", 
            "name": "Proxy rejects requests without correct headers with `400 (Bad Request)`", 
            "id": "connect-udp-headers-validate"
        }, 
        {
            "kind": "supported", 
            "name": "Proxy supports forwarded mode", 
            "id": "connect-udp-proxy-forwarded-mode"
        }, 
        {
            "kind": "must", 
            "name": "Proxy echoes `Datagram-Flow-Id` and `*-Connection-Id` headers in successful replies", 
            "id": "connect-udp-headers-echo"
        }, 
        {
            "kind": "should", 
            "name": "Proxy uses forwarded packets to restart its idle timeout", 
            "id": "connect-udp-proxy-idle"
        }, 
        {
            "kind": "must", 
            "name": "Proxy closes HTTP stream when it rejects a `CONNECT-UDP` request", 
            "id": "connect-udp-close-stream"
        }
    ], 
    "name": "QUIC-Aware Proxying Using CONNECT-UDP", 
    "id": "draft-pauly-masque-quic-proxy.mjs"
}
