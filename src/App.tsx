import styled, { keyframes } from "styled-components";

const Father = styled.div`
    display: flex;
`;

const rotationAnimation = keyframes`
	0%{
		transform: rotate(0deg);
		border-radius: 0px;
	}
	50%{
		border-radius: 100px;
	}
	100%{
		transform: rotate(360deg);
		border-radius: 0px;
	}
`;

const Box = styled.div<{ bgColor: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.bgColor}; // props 전달 받기
    width: 200px;
    height: 200px;
    animation: ${rotationAnimation} 1s linear infinite;

    span {
        font-size: 36px;
        &:hover {
            font-size: 48px;
        }
        &:active {
            opacity: 0;
        }
    }
`;

// 컴포넌트 확장(상속) : Box와 동일한 속성 + border-radius 속성 추가
const Circle = styled(Box)`
    border-radius: 50%;
`;

const Btn = styled.button`
    color: #fff;
    background-color: tomato;
    border: 0;
    border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, maxLength: 10 })`
    background-color: orange;
`;

function App() {
    return (
        <>
            <Father as="header">
                <Box bgColor="teal">
                    <span>😎</span>
                </Box>
                <Circle bgColor="whitesmoke" />
            </Father>
            <Btn>Login</Btn>

            <Btn as="a" href="/">
                Login
            </Btn>

            <Input />
            <Input />
        </>
    );
}

export default App;
