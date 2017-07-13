var A = [-1, 3, -4, 5, 1, -6, 2, 2];
      //  0  1   2  3  4   5  6  7

      // A[0]+A[1]+A[2] = A[4]+A[5]+A[6] => 3


function solution(A) {
    var rightSum = A.reduce((acc, val) => acc + val, 0), leftSum = 0;

    for (var i = 0; i < A.length; i++) {

        rightSum -= A[i];

        // Codility is asking for any, so return first found
        if (rightSum === leftSum) return i;

        leftSum += A[i];
    }

    return -1;
}

console.log(solution(A));
// 5
