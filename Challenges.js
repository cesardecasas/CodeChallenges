
function compareTriplets(a, b) {
    // Write your code here
    let al =0
    let bob = 0 
    for(let i=0; i<3; i++){
        if(a[i]<b[i]){
            bob+=1
        }else if(a[i]>b[i]){
            al+=1
        }
    }
    return [al, bob]
}


const reverseString =(str)=> str.split('').reverse().join('');

const kangaroo =(x1, v1, x2, v2) => {
    let answer = ''
    if(v2 > v1 || v2 === v1){
        return 'NO'
    }
     
    while(answer === ''){
        
        if(x1 > x2){
            answer = 'NO'
        }
        if(x1 === x2){
            answer = 'YES'
        }
        
        x2 += v2
        x1 += v1
        
    }
    
    return answer
}
