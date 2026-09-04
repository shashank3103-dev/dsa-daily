function firstStableIndex(nums: number[], k: number): number {
    for (let i = 0; i < nums.length; i++) {

        // Find MAX from 0 → i
        let max: number = nums[0];

        for (let j = 0; j <= i; j++) {
            max = Math.max(max, nums[j]);
        }

        // Find MIN from i → end
        let min: number = nums[i];

        for (let j = i; j < nums.length; j++) {
            min = Math.min(min, nums[j]);
        }

        // Calculate instability
        const instability: number = max - min;

        // Check if stable
        if (instability <= k) {
            return i;
        }
    }

    return -1;
}