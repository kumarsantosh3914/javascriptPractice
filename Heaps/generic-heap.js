class Heap {
  #arr;
  constructor(comp) {
    this.#arr = [];
    this.comparator = comp; // function
  }
  swap(i, j) {
    let temp = this.#arr[i];
    this.#arr[i] = this.#arr[j];
    this.#arr[j] = temp;
  }
  upheapify(idx) {
    while (idx > 0) {
      // if idx is 0 you dont have a parent
      let pi = Math.floor((idx - 1) / 2);
      if (this.comparator(this.#arr[idx], this.#arr[pi])) {
        // swap
        this.swap(idx, pi);
      } else {
        // no more upheapify needed
        break;
      }
      idx = pi;
    }
  }
  downheapify(idx) {
    while (idx < this.#arr.length) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let result = idx; // assume that max element is the root;
      if (
        left < this.#arr.length &&
        this.comparator(this.#arr[left], this.#arr[result])
      ) {
        // if left child exists and left node is bigger than the last assumed result
        result = left; // make left child the new result candidate
      }
      if (
        right < this.#arr.length &&
        this.comparator(this.#arr[right], this.#arr[result])
      ) {
        // if right child exists and right node is bigger than the last assumed result
        result = right;
      }
      // swap the idx with result
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
    // swap root with last element
    this.swap(0, this.#arr.length - 1);
    this.#arr.pop();
    this.downheapify(0);
  }
  display() {
    console.log(this.#arr);
  }
}

function maxHeapComparator(a, b) {
  return a > b;
}

const maxHeap = new Heap(maxHeapComparator);

maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(15);
maxHeap.insert(30);

console.log("Max Heap:");
maxHeap.display();

console.log("Removing the maximum element:", maxHeap.get());
maxHeap.remove();

console.log("Max Heap after removal:");
maxHeap.display();
