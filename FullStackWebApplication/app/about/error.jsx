"use client"

export default function Error ( { error, reset } ){
    return (
        <div>
            This ain't landing up: {error.message}
            <button onClick={() => reset()}>Reload</button>
        </div>
    )
}
// 

