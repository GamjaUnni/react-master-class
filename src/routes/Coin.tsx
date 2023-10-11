import { useParams } from "react-router";

interface RouteParams {
    coinId: string;
}

function Coin() {
    const { coinId } = useParams<RouteParams>();
    console.log("🚀 ~ file: Coin.tsx:9 ~ Coin ~ coinId:", coinId);
    return <h1>Coin : {coinId}</h1>;
}
export default Coin;
