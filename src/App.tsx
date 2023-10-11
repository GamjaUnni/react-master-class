import { useState } from "react";
import styled from "styled-components";

function App() {
    const [value, setValue] = useState("");

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = e;
        setValue(value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("hello!", value);
    };

    const Container = styled.div`
        width: 100vw;
        height: 100vh;
        background-color: ${(props) => props.theme.bgColor};
        text-align: center;
    `;

    const H1 = styled.h1`
        color: ${(props) => props.theme.textColor};
    `;

    return (
        <Container>
            <H1>hello</H1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="user name"
                />
                <button>login</button>
            </form>
        </Container>
    );
}

export default App;
