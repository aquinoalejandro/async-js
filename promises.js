function hacerOperacionAsincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; //Si yo cambio esto a false sale error teoricamente
            if (exito) {
                resolve("SALIO TODO BIEN"); // Resuelve la promesa con un mensaje
            } else {
                reject(new Error("SALIO TODO MAL")); // Rechaza la promesa con un error
            }
        }, 1000); // Simulamos un segundo de espera
    });
}

const miPromesa = new Promise((resolve, reject) => {  const resultado = hacerOperacionAsincrona();   
    if (resultado) { 
        resolve(resultado); 
    } else { 
        reject(new Error('Error: ')); 
    } 
});

miPromesa
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.error(error.message);
    });
