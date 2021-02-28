var adlar=['Elvin','Famil','Parvin','iq']
var inputad='Salam'
var leninp=inputad.length
var i,j,k,m,n

for(i=0;i<adlar.length;i++){
    var soz=adlar[i]
    for(j=0;j<soz.length;j++){
        if(inputad.toUpperCase().includes(soz[j].toUpperCase())){
            console.log(soz)
            break
        }
    }
}



/*
for (i=0;i<adlar.length;i++){
    let h=[]
    while (leninp--){
        h.push(inputad[leninp])
        if(leninp==-1)break
    }
    for(k=0;k<h.length;k++){

    }
}
*/
/*
var c=adlar[0]
for(let d=0;d<c.length;d++){
    console.log(c[d])
}
*/
