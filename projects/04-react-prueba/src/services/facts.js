const CAT_ENPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    try {
        const response = await fetch(CAT_ENPOINT_RANDOM_FACT);
        if (!response.ok) throw new Error("Error al generar el hecho");
        const data = await response.json();
        return data.fact;
    } catch (error) {
        return console.error(error);
    }
}