const insertion = (a) => {
    for(let i = 0; i < a.length; i++){
        for(let j = i+1; j < a.length; j++){
            if(a[j] <= a[i]){
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    console.log(a);
    return a;
}
insertion([7,3,5,8,2,9,4,15,6]);