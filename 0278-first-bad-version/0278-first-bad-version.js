/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    return function (n) {
        let left = 1;
        let right = n;

        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);

            if (isBadVersion(mid)) {
                // mid is bad
                // First bad could be mid or before mid
                right = mid;
            } else {
                // mid is good
                // First bad must be after mid
                left = mid + 1;
            }
        }

        return left;
    };
};