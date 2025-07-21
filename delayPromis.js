const delay = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('DElay');
            resolve();
        },2000);
    })
}

delay();