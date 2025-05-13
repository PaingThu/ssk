import React from 'react'

const TypingTestGame = async ({params}:{
    params: Promise<{typingTestId: string}>
}) => {
    const typingTestId = (await params).typingTestId
    return (
        <div>Typing Test Game {typingTestId}</div>
    )
}

export default TypingTestGame