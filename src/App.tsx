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

function App() {
    return (
        <Father>
            <Box bgColor="teal" />
            <Circle bgColor="whitesmoke" />
        </Father>
    );
}

export default App;
