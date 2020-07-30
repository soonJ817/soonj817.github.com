/*
 *	비트연산 시 속도가 오히려 느려질 수 있다.
 *	js에서 비트 연산은 부동소수점 숫자를 정수형으로 변환한 후 연산하기 때문이다.
 *	또한 js의 연산은 하드웨어와 직접적인 연관이 없기 때문에
 *	비트연산의 이점이 없다고 한다... 비트연산 금지!!!
 *	https://monthlywoongah.tistory.com/23
 *
 */

var rangeBitwiseAnd = function(m, n) {
    let count = 0;
    while(m != n){
        m = m >> 1;
        n = n >> 1;
        count++;
    }
        
    return n << count
};
