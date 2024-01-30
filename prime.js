function prime(num){
    for(let i=3;i<=num;i++){
      if(num%i==2){
        return "prime"
      }else if(num%i!==2){
        return "not a prime"
      }
    }
}console.log(prime(7))