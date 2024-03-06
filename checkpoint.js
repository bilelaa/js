//reverse string function 
function reversestring(ch){
    var ch1=""
    for(i=ch.length;i>=0;i--){
        ch1+=ch[i];
    }
    return ch1
}
//count caractere function
function countcaratere(ch){
    var s=0
    for (i=0;i>=ch.lentgh;i++){
        s+=1
    }
    return s 
}
//Capitalize Words function
function capiatlize(ch){
    var ch1=ch[0].toUpperCase()
    var i=1
    while( i<ch.length)  {
        if(ch[i]==" "){
            ch1=ch1+" "+ch[i+1].toUpperCase()
            i+=2
        }
        else{
            ch1=ch1+ch[i]
            i++
        }
    }return ch1
}
//minimum maximum function
function minmax(tab){
    var min=tab[0]
    var max=tab[0]
    for( var i=1;i<tab.lneght ; i++){
        if(tab[i]>max){
            max=tab[i]
        }else if(min>tab[i]){
            min=tab[i]
        }
    }return min && max
}
// sum fonction  
function Sum(tab){
    var s=0
    for (var i = 0; i < tab.length; i++){
    s+=tab[i]
    }
    return s
}
//factorial function
function fac(N){
    var fact=1
    for(var i =1;i<=N;i++){
        fact=fact*i
    }
    return fact
}
//prime function
function primeNumber(n){
    var prime =0
    for (var i=0; i<n ;i++){
        if(n%i==0){
            s+=1
        }
    }if (s==1){
        return n+" est prime "
    }else{
        return n+" n'est pas prime"
    }
}
//fubinnacci fuction
function fibonacci(n) {
    if (n==0){
        return 0 ;
    }else if (n==1){
        return 1 ;
    }
    else{
        var s=0 ;
        var current=0 ;
        var next=1 ;
        for (var i=0;i<n-1;i++){
            
            s=next+current ;
            current=next ;
            next=s ;
        }
        return s ;
    }
    
 }