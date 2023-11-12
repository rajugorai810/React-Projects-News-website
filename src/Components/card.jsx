import React from 'react'

export default function Card(props) {
  
  return (
    <div>
      
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={props.image } alt='image not loaded' />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.title}</div>
        <p class="text-gray-700 text-base">
          {props.description}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <a href={props.url}>Read More</a>
      </div>
    </div>
</div>

    // </div>
  )
}
