import { useState } from "react";

const ToDoList = () => {
    const [toDo, setToDo] = useState("");
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setToDo(e.currentTarget.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(toDo);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={toDo}
                    onChange={onChange}
                    placeholder="Write a to do"
                />
                <button>Add</button>
            </form>
        </div>
    );
};
export default ToDoList;
