document.querySelector('button').addEventListener('click',apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://rap-names-api-4woq.onrender.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#result').innerHTML = `
            <li>Birth Name: ${data.BirthName}</li>
            <li>Age: ${data.Age}</li>
            <li>Birth Location: ${data.BirthLocation}</li`
    }catch(error){
        console.log(error)
    }
}