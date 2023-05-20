import React from 'react'

const CategoryButton = ({ title, color, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                width: "100px",
                height: "65px",
                backgroundColor: `${color}`,
                color: "white",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                border : "1px solid black",
                cursor : "pointer",

            }}
        >
            {title}
        </div>
    )
}

export default CategoryButton