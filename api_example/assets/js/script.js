window.onload = async function() {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const jsonData = await response.json()
    console.log(jsonData)
}