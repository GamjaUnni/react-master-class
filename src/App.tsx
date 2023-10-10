import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
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

const Emoji = styled.span`
    font-size: 36px;
`;

const Box = styled.div<{ bgColor: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.bgColor}; // props 전달 받기
    width: 200px;
    height: 200px;
    animation: ${rotationAnimation} 1s linear infinite;

    ${Emoji}:hover {
        font-size: 98px;
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
        <Wrapper as="header">
            <Title>Hello</Title>
        </Wrapper>
    );
}

export default App;
