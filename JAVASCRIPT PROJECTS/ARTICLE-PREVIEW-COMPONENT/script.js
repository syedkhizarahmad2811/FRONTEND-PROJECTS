const shareContentDiv = document.getElementById('share-content')
const shareButton = document.getElementById('share-button')

shareButton.addEventListener('click', () =>
{
    const shareSubDiv = document.createElement('div')
    shareSubDiv.classList.add('sharediv')


    const sharePara = document.createElement('p')
    sharePara.textContent = 'SHARE'
    sharePara.classList.add('sharepara')


    const fbImage = document.createElement('img')
    fbImage.src = './ASSETS/icon-facebook.svg'
    fbImage.alt = 'FaceBook'
    fbImage.classList.add('facebook')


    const xImage = document.createElement('img')
    xImage.src = './ASSETS/icon-twitter.svg'
    xImage.alt = 'Twitter'
    xImage.classList.add('x')


    const pinImage = document.createElement('img')
    pinImage.src = './ASSETS/icon-pinterest.svg'
    pinImage.alt = 'Pinterest'
    pinImage.classList.add('pinterest')

    
    shareSubDiv.append(sharePara,fbImage,xImage,pinImage)

    const cloudDiv = document.createElement('div')
    cloudDiv.classList.add('clouddiv')



    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add('share-wrapper')
    wrapperDiv.append(shareSubDiv,cloudDiv)


    shareContentDiv.appendChild(wrapperDiv)
})