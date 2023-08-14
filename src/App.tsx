import { useState } from "react";

function App() {
    const [inpval, setInpval] = useState({
        id: "",
        password: "",
    });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setInpval((prev) => ({ ...prev, [name]: value }));
        // if (name === "id") setInpval(value);
        // if (name === "password") setInpval(value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("logged in");
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="id"
                    value={inpval.id}
                    onChange={onChange}
                    placeholder="id"
                />
                <input
                    type="password"
                    name="password"
                    value={inpval.password}
                    onChange={onChange}
                    placeholder="password"
                />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default App;
