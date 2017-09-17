const recastai = require('recastai')

const client = new recastai.request('ebf5400d2fe5914906b84eebd8d84dce', 'en')

client.converseText('hello')
  .then(function(res) {
    if (res.action) { console.log('Action: ', res.action.slug) }
    const reply = res.reply()
    console.log('Reply: ', reply)
  })