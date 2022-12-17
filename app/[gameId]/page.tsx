import React from 'react'
type PageProps = {
  params: {
    gameId:number
  }
}

const page = (props:PageProps) => {
  return (
    <div>Game id: {props.params.gameId}</div>
  )
}

export default page