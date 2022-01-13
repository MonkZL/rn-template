#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

//填入自己项目的图片地址
const imageDir = 'src/files/images';

const targetImageDir = path.join(__dirname, `../../${imageDir}`);

function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), filesList); //递归读取文件
    } else {
      const reg = /.png|.jpg|.jpeg|.svg/;
      if (fullPath.match(reg)) {
        filesList.push(fullPath.replace(targetImageDir, '.'));
      }
    }
  });
  return filesList;
}

const filesList = [];
readFileList(targetImageDir, filesList);

let ImagesContent = '';

filesList.forEach((item) => {
  ImagesContent += `export const ${
    item.split('/')[1].split('.')[0]
  } = require('${item}');\n`;
});

fs.writeFile(`${targetImageDir}/Images.ts`, ImagesContent, () => {});
