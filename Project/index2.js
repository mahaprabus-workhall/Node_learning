

const fs = require('fs');
const path = require('path');

const localpath = path.join(process.cwd(''), 'sample');

fs.readdirSync(localpath).forEach((element) => {
  const ele_path = path.join(localpath, element);
  const stat = fs.statSync(ele_path);

  current_time = new Date();
  old_time = stat.birthtime;

  console.log(current_time);
  const del_content = (current_time - old_time) / 1000;
  console.log(del_content);
  console.log(stat.birthtime);

  if (del_content <= 12000) {
    fs.rmSync(ele_path, { recursive: true });
  }
});

const redis=require('redis')
const redis1=
console.log(redis)

