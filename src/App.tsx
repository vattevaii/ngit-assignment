import { useState } from "react";
import { Slider, SliderSettings } from "../lib/main";
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

function SliderSettingsOptions({
  handleSettingChange,
  settings,
}: {
  settings: SliderSettings;
  handleSettingChange: (name: string, value: any) => void;
}) {
  return (
    <div className="max-w-lg mx-auto p-3 bg-red-300">
      <h2 className="text-lg font-semibold mb-4">Slider Settings</h2>
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={settings.autoplay}
            onChange={(e) => handleSettingChange("autoplay", e.target.checked)}
            className="mr-2"
          />
          Autoplay
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={settings.centered}
            onChange={(e) => handleSettingChange("centered", e.target.checked)}
            className="mr-2"
          />
          Centered
        </label>
        <label className="flex flex-col">
          <span className="px-2">Slider Height:</span>
          <input
            type="number"
            value={settings.sliderHeight}
            onChange={(e) =>
              handleSettingChange("sliderHeight", parseInt(e.target.value))
            }
            className="ml-2 py-1 px-2 border border-gray-300 rounded"
          />
        </label>
        <label className="flex flex-col">
          <span className="px-2">Slides To Show:</span>
          <input
            type="number"
            value={settings.slidesToShow}
            onChange={(e) =>
              handleSettingChange("slidesToShow", Number(e.target.value))
            }
            className="ml-2 py-1 px-2 border border-gray-300 rounded"
          />
        </label>
        <label className="flex flex-col">
          <span className="px-2">Gap:</span>
          <input
            type="number"
            value={settings.gap}
            onChange={(e) =>
              handleSettingChange("gap", parseInt(e.target.value))
            }
            className="ml-2 py-1 px-2 border border-gray-300 rounded"
          />
        </label>
        <label className="flex flex-col">
          <span className="px-2">Active Style:</span>
          <div>
            <input
              type="checkbox"
              checked={settings.activeStyle === "scale"}
              onChange={() => handleSettingChange("activeStyle", "scale")}
              className="mr-2"
            />
            Scale
          </div>
          <div>
            <input
              type="checkbox"
              checked={settings.activeStyle === "none"}
              onChange={() => handleSettingChange("activeStyle", "none")}
              className="mr-2"
            />
            None
          </div>
        </label>
      </div>
      <div>
        {/* Render your slider using the settings */}
        {/* Example: */}
        {/* <SliderComponent settings={settings}>{children}</SliderComponent> */}
      </div>
    </div>
  );
}

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<SliderSettings>({
    autoplay: false,
    centered: true,
    gap: 10,
    sliderHeight: 700,
    slidesToShow: 2,
    activeStyle: 'scale'
  });

  const handleSettingChange = (name: string, value: boolean | number) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="fixed top-0 left-0 z-10">
        <button
          className="m-2 p-1 bg-slate-600 rounded-md text-white"
          onClick={() => setShowSettings((s) => !s)}
        >
          {showSettings ? "Hide" : "Show"} Settings
        </button>
        {showSettings ? (
          <SliderSettingsOptions
            settings={settings}
            handleSettingChange={handleSettingChange}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col gap-5 bg-fixed bg-gradient-to-br from-[#fbcb73] via-[#d42b7d] to-[#7341bb] justify-center items-center text-red-950 p-5 bg-slate-400 min-h-screen">
        <Slider settings={settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    </div>
  );
}

export default App;
