function calcularPromedio(calificaciones) 
{
    let suma = 0;

    for (let i = 0; i < calificaciones.length; i++) 
    {
        suma += calificaciones[i];
    }

    return suma / calificaciones.length;
}

console.log("=== PRACTICA JENKINS ===");

const calificaciones = [8, 9, 10];
const resultado = calcularPromedio(calificaciones);

console.log("Promedio obtenido:", resultado);

if (resultado === 10) 
{
    console.log("PRUEBA CORRECTA");
} else {
    console.error("PRUEBA FALLIDA");
    process.exitCode = 1;
}
