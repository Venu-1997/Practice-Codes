import React from 'react';


const Todolist = ({todolist,handleDelete}) => {


    return (
        <div>
            {
                todolist.map((task,index) => {
                    return(
                    <div key={index}>
                        <h5>{task} &nbsp; <button onClick={() => handleDelete(index)}>Delete</button></h5>
                    </div>)
                })
            }
        </div>
    )
}

export default Todolist;
