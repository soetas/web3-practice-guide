"use strict"

function println(...text) {
  document.write(`<font size="5" face="Consolas">${text.join(' ')}</font><br/><br/>`)
}

function var_dump(obj) {
  const replacer = (k, v)=>typeof v === 'function' ? v.toString() : v

  println(`<pre>${JSON.stringify(obj, replacer, 2)}</pre>`)
}

function callable(obj) {
  return typeof obj === 'function'
}

function Component() {
  this.strict_mode = false
}

Component.prototype.render = function() {}

function HTTPClient() {
  if(new.target === HTTPClient) {
    throw 'HTTPClient is not a constructor'
  }
}

HTTPClient.request = ()=>{}
HTTPClient.get = ()=>{}
HTTPClient.post = ()=>{}

String.prototype.font = function({size, face, color}) {
  size ??= '5'
  face ??= '微软雅黑'
  color ??= '#000'

  return `<font size="${size}" face="${face}" color="${color}">${this}</font>`
}

function str(value) {
  if(value === null) {
    return 'null'
  } else if(value === undefined) {
    return 'undefined'
  } else {
    return value.toString()
  }
}

function input(message) {
  return window.prompt(message)
}

function dir(obj) {
  const table = document.createElement('table')
  let tbody = ''

  table.border = 1
  
  for(const k in obj) {
    tbody += `<tr>
      <td>${k}</td>
      <td>${obj[k]}</td>
    </tr>`
  }

  table.innerHTML = `
  <thead>
    <tr>
      <th>name</th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    ${tbody}
  </tbody>
  `

  document.body.appendChild(table)
}

const bool = obj => !!obj
const address = import.meta.url.split('/')[2]

async function main() {
  println(address, typeof false, typeof NaN, typeof undefined)  
  println('\\', bool([]), bool({}), name === '')

  const user = {
    account:'Helena Ortega',
    email:'fidizopa@zepsehla.gov',
    eat(){
      console.log(`${this.account} is hungry ...`)
    },
    code(){},
    sleep(){},
  }

  var_dump(user)

  var_dump(new Component())

  println(callable(()=>{}), Component.constructor.name, 'hello,world'.font({color:'purple', size: 7}))
  println(bool(NaN), str(67.21))

  // setInterval(()=>println(new Date().getSeconds()), 1000)

  println(navigator.userAgent)

  dir(document)

  // document.body.classList.add('')

  const onContextmenu = ev=>{
    ev.preventDefault()
    ev.stopPropagation()
    dir(ev)
    document.removeEventListener('contextmenu', onContextmenu)
  }

  document.addEventListener('contextmenu', onContextmenu)

}

window.onload = main
