import React from "react";

interface ControlsProps {
  flexDirection: string;
  setFlexDirection: (value: string) => void;
  flexWrap: string;
  setFlexWrap: (value: string) => void;
  justifyContent: string;
  setJustifyContent: (value: string) => void;
  alignItems: string;
  setAlignItems: (value: string) => void;
  alignContent: string;
  setAlignContent: (value: string) => void;
  gap: number;
  setGap: (value: number) => void;
  resetContainer: () => void;
  addItems: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  flexDirection,
  setFlexDirection,
  flexWrap,
  setFlexWrap,
  justifyContent,
  setJustifyContent,
  alignItems,
  setAlignItems,
  alignContent,
  setAlignContent,
  gap,
  setGap,
  resetContainer,
  addItems,
}) => {
  return (
    <div className="w-full md:w-1/2 mt-6 bg-gray-700 p-4 rounded-lg">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={resetContainer}
      >
        Reset Items
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={addItems}
      >
        + Items
      </button>

      <div className="mt-4">
        <label className="block text-sm font-medium text-white">
          flex-direction:
        </label>
        <select
          value={flexDirection}
          onChange={(e) => setFlexDirection(e.target.value)}
          className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded"
        >
          <option value="row">row</option>
          <option value="row-reverse">row-reverse</option>
          <option value="column">column</option>
          <option value="column-reverse">column-reverse</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-white">
          flex-wrap:
        </label>
        <select
          value={flexWrap}
          onChange={(e) => setFlexWrap(e.target.value)}
          className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded"
        >
          <option value="nowrap">nowrap</option>
          <option value="wrap">wrap</option>
          <option value="wrap-reverse">wrap-reverse</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-white">
          justify-content:
        </label>
        <select
          value={justifyContent}
          onChange={(e) => setJustifyContent(e.target.value)}
          className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded"
        >
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-white">
          align-items:
        </label>
        <select
          value={alignItems}
          onChange={(e) => setAlignItems(e.target.value)}
          className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded"
        >
          <option value="stretch">stretch</option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="baseline">baseline</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-white">
          align-content:
        </label>
        <select
          value={alignContent}
          onChange={(e) => setAlignContent(e.target.value)}
          className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded"
        >
          <option value="stretch">stretch</option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-white">gap:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={gap}
          onChange={(e) => setGap(Number(e.target.value))}
          className="w-full mt-1"
        />
        <div className="text-sm text-gray-300 mt-1">{gap}px</div>
      </div>
    </div>
  );
};

export default Controls;
