"use client";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

type BarChartProps = {
  data: number[];
  width: number;
  height: number;
};

const BarChart: React.FC<BarChartProps> = ({ data, width, height }) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height);

    const x = d3
      .scaleBand()
      .domain(data.map((_, i) => i.toString()))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data) ?? 0])
      .range([height, 0]);

    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (_, i) => x(i.toString()) ?? 0)
      .attr("y", (d) => y(d))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d))
      .attr("fill", "steelblue");

    svg
      .selectAll("text")
      .data(data)
      .join("text")
      .attr("x", (_, i) => (x(i.toString()) ?? 0) + x.bandwidth() / 2)
      .attr("y", (d) => y(d) - 5)
      .attr("text-anchor", "middle")
      .text((d) => d.toString());
  }, [data, width, height]);

  return <svg ref={ref}></svg>;
};

export default BarChart;
