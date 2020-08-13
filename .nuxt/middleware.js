const middleware = {}

<<<<<<< HEAD
middleware['authenticated'] = require('..\\middleware\\authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['notAuthenticated'] = require('..\\middleware\\notAuthenticated.js')
=======
middleware['authenticated'] = require('../middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['notAuthenticated'] = require('../middleware/notAuthenticated.js')
>>>>>>> 671078a67f05c99dd2eca51495f3b0c0ad1759ed
middleware['notAuthenticated'] = middleware['notAuthenticated'].default || middleware['notAuthenticated']

export default middleware
