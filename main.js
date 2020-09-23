const userUrl = 'https://api.github.com/users/developerdeviney'

const targetEl = document.querySelector('#main-container')

const orgSection = document.querySelector('#org-data')

const theBasics = document.querySelector('#basics')

const theStory = document.querySelector('#story')
fetch(userUrl)
    .then(response => response.json())
    .then(function (data) {
        console.log(data)
        const headerEl = document.createElement('p')
        headerEl.innerText = data.login
        targetEl.appendChild(headerEl)

        const nameEl = document.createElement('p')
        nameEl.innerText = data.name
        targetEl.appendChild(nameEl)
        
        const githubEl = document.createElement('p')
        githubEl.classList.add('text-to-url')
        githubEl.innerText = data.html_url
        orgSection.appendChild(githubEl)

        const company = document.createElement('p')
        company.innerText = data.company 
        orgSection.appendChild(company)  
        
        const websiteUrl = document.createElement('p')
        websiteUrl.innerText = data.blog
        orgSection.appendChild(websiteUrl) 

        const trueStoray = document.createElement("p")
        trueStoray.innerText = data.bio 
        theStory.appendChild(trueStoray)

        const img = document.createElement("img")
        img.src = data.avatar_url
        theStory.appendChild(img)


    })