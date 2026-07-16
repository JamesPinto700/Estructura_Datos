class RouterBuffer {
  constructor() { this.heap = []; }
  push(paquete) { // paquete: {id, latencia} (menor latencia = mayor prioridad)
    this.heap.push(paquete);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].latencia <= this.heap[index].latencia) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }
  
  pop() { return this.heap.shift(); } // Simplificado para fines académicos
}
