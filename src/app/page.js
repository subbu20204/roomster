import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <body>
      <div>
        <Navbar/>
        <Hero/>
        <h1>hi this is my page</h1>
      </div>
    </body>
  );
}
