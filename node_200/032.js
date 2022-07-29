const gugu = () =>{
    for(let i=2; i<=9; i++){
        console.log('행시작');
        for(let j=1; j<=9; j++ ){
            console.log('열 시작')
            console.log('%d * %d = %d',i,j, i*j)
        }
    }
    
    
};

gugu()