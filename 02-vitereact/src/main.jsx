import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'


// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank',
//     },
//     children: 'Gooogly DotCom'
// }

// const anotherElement = (
//     <a href="https://google.com" target="_blank">Gooogly DotCom</a>
// )

createRoot(document.getElementById('root')).render(
    // anotherElement 
    App()
)
