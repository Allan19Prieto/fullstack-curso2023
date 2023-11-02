import React from 'react'
import ReactDom from 'react-dowm'

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098z',
        important: true, 
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2019-05-30T18:39:34.091Z',
        important: true, 
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true,
      },
]

const App = props => {
    const { notes } = props

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                <li>{notes[0].content}</li>
                <li>{notes[1].content}</li>
                <li>{notes[2].content}</li>
            </ul>
        </div>
    )
}

ReactDom.render(<App notes={notes} />, document.getElementById('root'))