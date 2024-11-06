import "./index.css"
import "./App.css"
import products from "./assets/products.json"
import Product from "./components/Product";
export default function App() {
 return (
<div className={"container"}>
<main className={"main"}>
<h1>
 E-Commerce in React and SnipCart
</h1>
<div className={"grid"}>
 {
products.map((product, i) =><Product {...product} key={i}/>)
 }
</div>
</main>
<div
 id="snipcart"
 data-apikey="NWMwZWNkZGMtZjU2ZS00YzM3LWFlZjYtMmM5Zjk0MWViZDcxNjM3Njg0OTY
0ODg5NTk4MTM3" hidden
>
</div>
</div>
 );
}