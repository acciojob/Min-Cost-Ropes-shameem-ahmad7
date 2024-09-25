function mincost(arr) {
    // Create a min-heap (priority queue)
    const heap = arr.slice(); // Make a copy of the input array
    heap.sort((a, b) => a - b); // Sort initially to simulate heap behavior
    
    let totalCost = 0;
    
    while (heap.length > 1) {
        // Get the two smallest ropes
        let first = heap.shift();  // Remove the smallest
        let second = heap.shift(); // Remove the second smallest
        
        // The cost to connect them
        let cost = first + second;
        totalCost += cost;
        
        // Insert the combined rope back into the heap
        heap.push(cost);
        heap.sort((a, b) => a - b); // Maintain the heap order
    }
    
    return totalCost;
}

// Examples:
console.log(mincost([4, 3, 2, 6]));  // Output: 29
console.log(mincost([1, 2, 3, 4, 5]));  // Output: 33
