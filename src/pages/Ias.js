import React from 'react'
import Content from '../components/Content'

export default function Ias() {
  return (
    <div>
      <p>Welcome to Ias - your gateway to innovation!</p>
      <ul>
        <li><a href="https://publicapis.dev/" target="_blank" rel="noopener noreferrer">Explore a vast collection of public APIs</a> - Discover and integrate various APIs for your projects.</li>
        <li><a href="https://www.blackbox.ai/" target="_blank" rel="noopener noreferrer">Unlock the potential of AI with Blackbox</a> - Empower your business with cutting-edge AI solutions.</li>
        <li><a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">Engage in intelligent conversations with OpenAI</a> - Dive into the world of conversational AI.</li>
        <li><a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">Discover Gemini by Google</a> - Experience the next generation of online collaboration.</li>
        <li><a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">Enhance your coding experience with GitHub Copilot</a> - Let AI assist you in writing code.</li>
        <li><a href="https://www.bing.com/" target="_blank" rel="noopener noreferrer">Explore the web with Bing</a> - Microsoft's powerful search engine at your fingertips.</li>
        <li><a href="https://mistral.ai/" target="_blank" rel="noopener noreferrer">Unleash innovation with Mistral</a> - Transforming businesses through AI-driven solutions.</li>
        <li><a href="https://llama.meta.com/" target="_blank" rel="noopener noreferrer">Experience Llama by Meta</a> - Navigate the metaverse with Meta's innovative platform.</li>
      </ul>
      
      <Content />  
    </div>
  )
}