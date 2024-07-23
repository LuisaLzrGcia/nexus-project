import React from 'react'

const [componet, setComponet] = useState("Noticias")

function selected() {
    return componet
}

function setSelected(params) {
setComponet(params)
}

export default selected