import React from 'react'

const ButtonCustom = ({ titlePepito, funcionManuelita }) => {
    return (
        <button onClick={() => funcionManuelita()}>
            {titlePepito}
        </button>
    )
}

export default ButtonCustom