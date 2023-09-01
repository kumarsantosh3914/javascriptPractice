class Heap {
  #arr;
  constructor(cmp, array) {
    this.#arr = array;
    this.comparator = cmp; // function
    this.limit = array.length - 1;
    this.buildHeap();
  }
  buildHeap() {
    for (let i = this.#arr.length - 1; i >= 0; i--) {
      this.downheapify(i);
    }
  }
  swap(i, j) {
    let temp = this.#arr[i];
    this.#arr[i] = this.#arr[j];
    this.#arr[j] = temp;
  }
  upheapify(idx) {
    while (idx > 0) {
      let pi = Math.floor((idx - 1) / 2);
      if (this.comparator(this.#arr[idx], this.#arr[pi])) {
        // swap
        this.swap(idx, pi);
      } else {
        // no more unheapify needed
        break;
      }
      idx = pi;
    }
  }
  downheapify(idx) {
    while (idx < this.limit) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let result = idx; // assume that max element is the root
      if (
        left <= this.limit &&
        this.comparator(this.#arr[left], this.#arr[result])
      ) {
        // if left child exixts and left node is bigger than the last assumed result
        result = left;
      }
      if (
        right <= this.limit &&
        this.comparator(this.#arr[right], this.#arr[result])
      ) {
        // if right child exists and right node is bigger than the last assumed result
        result = right;
      }
      if (idx == result) {
        // root was the larget
        break;
      }
      this.swap(idx, result);
      idx = result;
    }
  }
  insert(data) {
    this.#arr.push(data);
    this.upheapify(this.#arr.length - 1);
  }
  get() {
    if (this.#arr.length > 0) {
      return this.#arr[0];
    } else {
      return undefined;
    }
  }
  remove() {
    this.swap(0, this.limit);
    this.limit--;
    this.downheapify(0);
  }
  display() {
    console.log(this.#arr);
  }
  getArray() {
    return this.#arr;
  }
}

function heapSort(arr) {
  let mh = new Heap((a, b) => a > b, arr);
  let count = 0;
  while (count < arr.length) {
    count++;
    mh.remove();
  }
  return mh.getArray();
}

let arr = [9, 1, 4, 3, 2, 3, 4, 1, 0, 0, 99, 5, 6];
arr = heapSort(arr);
console.log(arr);
