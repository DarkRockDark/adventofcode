class dirNode {
  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
    this.subdirs = [];
    this.files = [];
  }
  // mkdir(name){
  //     const name = new Dir();
  //     this.subdirs.push(name);
  // }
  size() {
    let currSize = 0;
    for (const subdir in this.subdirs) {
      currSize += subdir.size();
    }
    for (const file in this.files) {
      currSize += file.size();
    }
    return currSize;
  }
  cd(directory) {
    if (directory === this.name) {
      return this;
    } else if (directory === "..") {
      return this.parent;
    } else if (this.subdirs[directory]) {
      return this.subdirs[directory];
    } else {
      throw "unknown directory command";
    }
  }
  mkdir(name) {
    this.subdirs.push(new dirNode(name));
  }
  touch(size, fileName) {
    this.files.push(new dirFile(size, fileName));
  }
  ls() {
    console.log(`dir:\t${this.name}\t${this.size()}`);
    for (const subdir in this.subdirs) {
      console.log(`\t${subdir.ls()}`);
    }
    for (const file in this.files) {
      console.log(`\t${file.ls()}`);
    }
  }
  toString() {
    this.ls();
  }
}

class dirFile {
  constructor(size, fileName) {
    this.fileName = fileName;
    this.size = size;
  }
  ls() {
    return this.size;
  }
  toString() {
    this.ls();
  }
}

export default dirNode;
