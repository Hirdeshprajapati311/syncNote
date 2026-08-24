import { useState } from "react";
import { Slider } from "../ui/slider";

const fontScales = ["Small", "Medium", "Large"];

export default function FontScaleCard() {
  const [fontScale, setFontScale] = useState(1);

  return (
    <div className="col-span-1 rounded-2xl border bg-white p-8">
      <h2 className="text-lg md:text-2xl font-bold text-gray-700">
        Font Scale
      </h2>

      {/* Labels */}
      <div className="mt-8 flex items-center justify-between px-1">
        {fontScales.map((size, index) => {
          const isActive = fontScale === index;

          return (
            <button
              key={size}
              onClick={() => setFontScale(index)}
              className={`
          transition-all duration-200
          ${index === 0
                  ? "text-xs"
                  : index === 1
                    ? "text-base"
                    : "text-xl"
                }
          ${isActive
                  ? "font-bold text-indigo-600"
                  : "font-normal text-gray-500 hover:text-gray-700"
                }
        `}
            >
              {size}
            </button>
          );
        })}
      </div>

      {/* Slider */}
      <Slider
        value={[fontScale]}
        min={0}
        max={2}
        step={1}
        onValueChange={(value: number | readonly number[]) => {
          setFontScale(Array.isArray(value) ? value[0] : value);
        }}
        className="mt-6"
      />

      {/* Preview */}
      <div className="mt-16 rounded-xl border bg-white p-5 shadow-sm">
        <p
          className={`leading-7 text-gray-700 transition-all ${fontScale === 0
            ? "text-sm"
            : fontScale === 1
              ? "text-base"
              : "text-lg"
            }`}
        >
          This is a preview of the typography scale. Adjust the slider to see
          how text sizes change across the workspace.
        </p>
      </div>
    </div>
  );
}