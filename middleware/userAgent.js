export default function (context) {
  if (context.isServer) {
    if (context.req) {
      context.userAgent = context.req.headers['user-agent']
    }
  } else {
    context.userAgent = navigator.userAgent
  }
}
