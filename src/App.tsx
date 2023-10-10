import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;

const Box = styled.div<{ bgColor: string }>`
    background-color: ${(props) => props.bgColor}; // props 전달 받기
    width: 100px;
    height: 100px;
`;

// 컴포넌트 확장(상속) : Box와 동일한 속성 + border-radius 속성 추가
const Circle = styled(Box)`
    border-radius: 50%;
`;

// const Btn = styled.button`
//     color: #fff;
//     background-color: tomato;
//     border: 0;
//     border-radius: 15px;
// `;

const Input = styled.input.attrs({ required: true, maxLength: 10 })`
    background-color: orange;
`;

function App() {
    return (
        <Father as="header">
            <Box bgColor="teal" />
            <Circle bgColor="whitesmoke" />
            {/* <Btn>Login</Btn>

            <Btn as="a" href="/">
                Login
            </Btn> */}

            <Input />
            <Input />
        </Father>
    );
}

export default App;
