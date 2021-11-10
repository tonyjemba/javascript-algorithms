class MadeArray{
     constructor(){
         //initiates MadeArray object with an empty object with length 0
         this.length = 0;
         this.elements = {};
     }
    /**
     * 
     * @param {number} index -index of the element to return
     * @returns {any}
     */
     getElement(index){
         return this.elements[index];
     }
     /**
      * 
      * @param {any} element -element to push at the end of the array
      * @returns {number}
      */
     push(element){
         this.elements[this.length] = element;
         this.length++;
         return this.length; 
     }
     /**
      *
      * @returns {any} - last element that is removed from the array
      */
     pop(){
         const element_to_pop = this.elements[this.length - 1];
         delete this.elements[this.length - 1];
         this.length--; 
         return element_to_pop;
     }
     /**
      * 
      * @param {number} index -index of the element to delete
      * @returns 
      */
     delete(index){
         const element_to_delete = this.elements[index];
         this.shiftElements(index);
         return element_to_delete;
     }

     shiftElements(index){
         for(let x = index; x < this.length-1; x++){
             this.elements[x] = this.elements[x+1];
         }
         delete this.elements[this.length - 1];
         this.length--;
     }
}

const mine = new MadeArray();
mine.push("1");
mine.push("2");
mine.push("3");
mine.push("4");

console.log(mine);
