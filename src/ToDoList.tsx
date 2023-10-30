import { useState } from "react";
import { useForm } from "react-hook-form";

// const ToDoList = () => {
//     const [toDo, setToDo] = useState("");
//     const [toDoError, setToDoError] = useState("");
//     const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//         setToDo(e.currentTarget.value);
//         setToDoError("");
//     };
//     const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (toDo.length < 10) {
//             setToDoError("10자 이상 입력해주세요.");
//         }
//     };
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input
//                     value={toDo}
//                     onChange={onChange}
//                     placeholder="Write a to do"
//                 />
//                 <button>Add</button>
//                 {toDoError !== "" ? toDoError : null}
//             </form>
//         </div>
//     );
// };

const ToDoList = () => {
    const { register, watch } = useForm();
    return (
        <div>
            <form>
                <input {...register("email")} placeholder="Email" />
                <input {...register("firstName")} placeholder="First Name" />
                <input {...register("lastName")} placeholder="Last Name" />
                <input {...register("username")} placeholder="Username" />
                <input {...register("password")} placeholder="Password" />
                <input {...register("password1")} placeholder="Password1" />
                <button>Add</button>
            </form>
        </div>
    );
};

export default ToDoList;
