import "./App.css";
import { Card } from "./components/Card";
import GradientDiv from "./components/common/GradientDiv";

// This is test component for every gradient I tried
// @ts-ignore
function Test() {
  return (
    <div className="flex flex-col gap-5 p-10 bg-accent-light">
      <GradientDiv
        className="rounded-full p-5 bg-accent-solid shadow-pop"
        style={{
          // @ts-expect-error
          "--border-width": "5px",
        }}
      >
        <h1 className="text-7xl">Hello</h1>
      </GradientDiv>
      <GradientDiv
        className="p-5 bg-accent-light shadow-pop"
        style={{
          // @ts-expect-error
          "--border-width": "5px",
        }}
      >
        <h1 className="text-7xl">Hello</h1>
      </GradientDiv>
      <div className="relative rounded-full h-20 w-20 bg-gradient-to-br from-accent-solid  to-[#0001]  ">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f1bbab] to-[#0000] rounded-full p-2 shadow-[#f1bbab60_5px_5px_5px_2px_inset,_#0002_-5px_-5px_6px_2px_inset]">
          <div className="h-full w-full rounded-full"></div>
        </div>
      </div>
      <div className="box-border bg-gradient-to-br from-accent-solid  to-transparent rounded-full h-20 w-20">
        <div className="bg-gradient-to-br from-[#f1bbab] via-[#f1bbab]  to-[#0005] p-2 h-full rounded-full">
          <div className="h-full bg-gradient-to-br from-accent-solid  to-[#0001] shadow-[#f1bbab60_3px_3px_5px_2px_inset,_#0002_-3px_-3px_6px_2px_inset] rounded-full "></div>
        </div>
      </div>
      <div className="box-border bg-gradient-to-br from-[#f1bbab] via-[#f1bbab]  to-[transparent] rounded-full p-2 h-10">
        <div className="h-full bg-accent-solid shadow-[#f1bbab60_3px_3px_5px_2px_inset,_#0002_-3px_-3px_6px_2px_inset] rounded-full "></div>
      </div>
      <div className="box-border bg-gradient-to-br from-[#f1bbab] bg-accent-light to-[#d26b7b] rounded-full p-2 h-10">
        <div className="h-full bg-accent-solid brightness-100 shadow-[#f1bbab60_3px_3px_5px_2px_inset,_#0002_-3px_-3px_6px_2px_inset] rounded-full "></div>
      </div>
      <div className="box-border bg-accent-solid bg-gradient-to-br from-[#f1bbab] to-[#d26b7b] rounded-full p-2 h-10 w-10">
        <div className="h-full bg-accent-solid brightness-100 shadow-[#f1bbab60_3px_3px_5px_2px_inset,_#0002_-3px_-3px_6px_2px_inset] rounded-full"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col gap-5 bg-gradient-to-br from-[#fbcb73] via-[#d42b7d] to-[#7341bb] justify-center items-center text-red-950 p-5 bg-slate-400 h-screen">
      <Card />
    </div>
  );
}

export default App;
