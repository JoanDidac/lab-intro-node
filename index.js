class SortedList {
  constructor() {
    this.items= [];
    this.length = this.items.length;

  }

  add(item) {
    // this.items.sort((a,b) => {
    //   if(a>b) return 1;
    //   if(a<b) return -1;
    //   return 0;
    // });

   this.items.push(item);
   this.items.sort((a,b) => a - b);
   
  }

  get(pos) {

    if (this.length === 0) {
      throw new Error ('OutOfBounds') }
     //this.items.indexOf(pos)}
    
     else { return this.items[pos];}
    
  }

  max() {
    if (this.items.length === 0 ) {
       throw new Error('EmptySortedList');}
  
      // return Math.max(this.items);
    //  else if (this.items.length !== 0 ) { return Math.max(this.items)}
    return Math.max.apply(null, this.items);
    }

  min() {
    if (this.items.length === 0) {
      throw new Error ('EmptySortedList');} 

      // else if (this.items.length !== 0 ) { return Math.min(this.items)}
      return Math.min.apply(null, this.items);
  }

  sum() {
    if (this.items.length === 0) { return 0 }
    return this.items.reduce((a,b) => a + b);

  }

  avg() {
    if (this.items.length === 0) { 
      throw new Error('EmptySortedList');}
    else {return this.sum()/this.items.length;}
  }
}

module.exports = SortedList;
