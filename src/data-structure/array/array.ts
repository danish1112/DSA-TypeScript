export class myArray {
    private length: number;
    private array: any;

    constructor() {
        this.array = {};
        this.length = 0;
    }

    /**
     * 
     * @param item 
     * time complexity 0(1)
    */
    push(item: string) {
        this.array[this.length] = item;
        this.length++
    }

    /**
     * time complexity 0(1)
    */
    pop() {
        delete this.array[this.length - 1];
        this.length--;
    }

    /**
     * 
     * @param index 
     * time complexity 0(n)
    */
    delete(index : number){
      this.shiftItems(index);
    }

    /**
     * 
     * @param index 
     * @param item 
     * time complexity 0(n)
     */
    insert(index : number, item : string){
        for(let i = this.length - 1; i >= index; i--){
            this.array[i+1] = this.array[i];
        }

        this.array[index] = item;
        this.length++;
    }

    /**
     * 
     * @param index 
     * time complexity 0(n)
    */
    private shiftItems(index : number){
        for(let i = index; i < this.length -1; i++){
            this.array[i] = this.array[i+1]
        }
        delete this.array[this.length - 1];
        this.length--;
    }
}

