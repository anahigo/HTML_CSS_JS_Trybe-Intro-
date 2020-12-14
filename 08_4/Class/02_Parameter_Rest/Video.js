const myPackage = ['cheese', 'eggs', 'milk', 'bread'];
console.log(...myPackage);
//print 'cheese', 'eggs', 'milk', 'bread'

printPackageContents('cheese', 'eggs', 'milk', 'bread');
function printPackageContents(...items) {
  for (const item of item) {
    console.log(item)
  }
}

//print 'cheese', 'eggs', 'milk', 'bread'