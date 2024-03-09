import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <body>
      <div>
        <Navbar/>
        <Hero/>
      </div>
    </body>
  );
}
