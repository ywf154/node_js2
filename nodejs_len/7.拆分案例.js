const fs = require('fs')
const path = require('path')
const reg_style = /<style>[\s\S]*<\/style>/
const reg_script = /<script>[\s\S]*<\/script>/
//  [\s\S]*中：  \s表示空字符  \S表示非空字符 *表示任意多个
//  <\/style>/中：\/为转义字符：表示 /