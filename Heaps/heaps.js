class MaxHeap {
  #arr;
  constructor() {
    this.#arr = [];
  }
  swap(i, j) {
    let temp = this.#arr[i];
    this.#arr[i] = this.#arr[j];
    this.#arr[j] = temp;
  }
  upheapify(idx) {
    while (idx > 0) {
      let pi = Math.floor(idx - 1);
      if (this.#arr[idx] > this.#arr[pi]) {
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
      let result = idx; // assume that max element
      if (left < this.#arr.length && this.#arr[left] > this.#arr[result]) {
        // if left child exists and left node is bigger than the last assumed result
        result = left; // make left child the new result candidate
      }
      if (right < this.#arr.length && this.#arr[right] > this.#arr[result]) {
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
    this.swap(0, this.#arr.length - 1);
    this.#arr.pop();
    this.downheapify(0);
  }
  display() {
    console.log(this.#arr);
  }
}

const hp = new MaxHeap();
hp.insert(10);
hp.insert(2);
hp.insert(6);
hp.insert(19);
hp.insert(3);
hp.insert(4);
hp.display();
hp.insert(20);
hp.display();
hp.remove();
hp.remove();
hp.display();
