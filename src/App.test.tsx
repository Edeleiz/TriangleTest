import React from 'react';
import ReactDOM from 'react-dom';
import TriangleModel from './triangle/TriangleModel'
import TriangleView from './triangle/TriangleView';
import { TriangleShape } from "./triangle/TriangleShape";
import { TriangleType } from './triangle/enum';

it('renders without crashing', () => {
  const div = document.createElement('div');
  var model = new TriangleModel();
  ReactDOM.render(<TriangleView model={model} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Equilateral triangle", () => {
  it("should be equilateral, if all sides are equal", () => {
    const triangle = new TriangleShape(5, 5, 5);
    expect(triangle.hasType(TriangleType.EQUILATERAL)).toBe(true);
  });

  it("should not be equilateral, if one side differs", () => {
    const triangle = new TriangleShape(5, 5, 6);
    expect(triangle.hasType(TriangleType.EQUILATERAL)).toBe(false);
  });
});

describe("Invalid triangle", () => {
  it("should be invalid, if has negative sides", () => {
    const triangle = new TriangleShape(-1, -1, -1);
    expect(triangle.hasType(TriangleType.INVALID)).toBe(true);
  });

  it("should be invalid, if one side differs", () => {
    const triangle = new TriangleShape(-5, 5, 6);
    expect(triangle.hasType(TriangleType.INVALID)).toBe(true);
  });

  it("should be invalid, if has 0 length sides", () => {
    const triangle = new TriangleShape(2, 0, 2);
    expect(triangle.hasType(TriangleType.INVALID)).toBe(true);
  });
});

describe("Scalene triangle", () => {
  it("should be scalene, if all sides are different", () => {
    const triangle = new TriangleShape(1, 2, 3);
    expect(triangle.hasType(TriangleType.SCALENE)).toBe(true);
  });

  it("should not be scalene, if any two sides are equal", () => {
    const triangle = new TriangleShape(1, 2, 2);
    expect(triangle.hasType(TriangleType.SCALENE)).toBe(false);
  });
});

describe("Isosceles triangle", () => {
  it("should be isosceles, if two sides are equal, and third differs", () => {
    const triangle = new TriangleShape(2, 3, 2);
    expect(triangle.hasType(TriangleType.ISOSCELES)).toBe(true);
  });

  it("should be isosceles, if two sides are equal, and third differs", () => {
    const triangle = new TriangleShape(5, 1, 1);
    expect(triangle.hasType(TriangleType.ISOSCELES)).toBe(true);
  });

  it("should not be isosceles, if all sides are equal", () => {
    const triangle = new TriangleShape(5, 5, 5);
    expect(triangle.hasType(TriangleType.ISOSCELES)).toBe(false);
  });
});