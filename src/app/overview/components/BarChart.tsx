"use client";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

type BarChartProps = {
  data: number[];
  width: number;
  height: number;
};

// const BarChart: React.FC<BarChartProps> = () => {
const BarChart = () => {
  const ref = useRef<SVGSVGElement | null>(null);
  const width: number = 1000;
  const height: number = 300;
  const data: [number, number][] = [
    [0, 32],
    [1, 34],
    [2, 36],
    [3, 38],
    [4, 41],
    [5, 45],
    [6, 50],
    [7, 55],
    [8, 59],
    [9, 62],
    [10, 65],
    [11, 68],
    [12, 70],
    [13, 72],
    [14, 74],
    [15, 76],
    [16, 78],
    [17, 80],
    [18, 82],
    [19, 84],
    [20, 86],
    [21, 87],
    [22, 88],
    [23, 89],
    [24, 90],
    [25, 91],
    [26, 92],
    [27, 93],
    [28, 94],
    [29, 94.5],
    [30, 95],
    [31, 94],
    [32, 93],
    [33, 91],
    [34, 89],
    [35, 87],
    [36, 85],
    [37, 83],
    [38, 81],
    [39, 80],
    [40, 79],
    [41, 78],
    [42, 77],
    [43, 75],
    [44, 73],
    [45, 71],
    [46, 70],
    [47, 69],
    [48, 68],
    [49, 67],
    [50, 66],
    [51, 64],
    [52, 63],
    [53, 62],
    [54, 61],
    [55, 60],
    [56, 59],
    [57, 58],
    [58, 57],
    [59, 56],
    [60, 55],
    [61, 57],
    [62, 59],
    [63, 62],
    [64, 65],
    [65, 68],
    [66, 71],
    [67, 74],
    [68, 77],
    [69, 79],
    [70, 81],
    [71, 83],
    [72, 85],
    [73, 87],
    [74, 88],
    [75, 89],
    [76, 90],
    [77, 91],
    [78, 92],
    [79, 93],
    [80, 92.5],
    [81, 92],
    [82, 91],
    [83, 90],
    [84, 89],
    [85, 88],
    [86, 87],
    [87, 86],
    [88, 85],
    [89, 84],
    [90, 83],
    [91, 82],
    [92, 81],
    [93, 80],
    [94, 79],
    [95, 78],
    [96, 77],
    [97, 76],
    [98, 75],
    [99, 74],
    [100, 73],
  ];

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`);

    const x = d3
      .scaleLinear() // new Date("2025-01-01")
      .domain([0, 100]) // From 0 to 100
      .range([40, width - 50]); // [marginLeft, width - marginRight]

    const y = d3
      .scaleLinear()
      .domain([0, 100]) // From 0 to 100
      .range([height - 30, 20]); // [height - marginBottom, marginTop]

    svg
      .append("g")
      .attr("transform", `translate(0, ${height - 30})`) // translate(0,${height - marginBottom})
      .call(d3.axisBottom(x).ticks(10));

    svg
      .append("g")
      .attr("transform", "translate(40, 0)") // translate(${marginLeft},0)
      .call(d3.axisLeft(y).ticks(8));

    const line = d3
      .line<[number, number]>()
      .x((d) => x(d[0]))
      .y((d) => y(d[1]));

    svg
      .append("path")
      .attr("d", line(data as [number, number][]))
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("fill", "none");

    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d[0]))
      .attr("cy", (d) => y(d[1]))
      .attr("r", 4)
      .attr("fill", "#3b82f6")
      .attr("stroke", "white")
      .attr("stroke-width", 1.5);

    svg.node();
  }, [data, width, height]);

  return (
    <svg
      // viewBox={`0 0 ${width} ${height}`}
      /* style={{
        border: "2px solid red",
      }} */
      ref={ref}
    ></svg>
  );
};

export default BarChart;
