import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import './chart.css';

const Chart = (props) => {
    const [data] = useState(props.data);

    useEffect(() => {
        function perc2color(rssi, s, t) {
            // scale -40 to -80
            var perc = 1 - (((Math.abs(rssi) - 40)) / (80 - 40))

            if (perc < 0) perc = 0;
            if (perc > 1) perc = 1;

            var r, g, b = 0;

            if (perc * 100 < 50) {
                r = 255;
                g = Math.round(5.1 * perc * 100);
            }
            else {
                g = 255;
                r = Math.round(510 - 5.10 * perc * 100);
            }

            var h = r * 0x10000 + g * 0x100 + b * 0x1;
            var color = '#' + ('000000' + h.toString(16)).slice(-6)

            console.log(`${s} -> ${t} ${rssi} | ${perc}%`)
            return { color, perc };
        }

        // This function is run at each iteration of the force algorithm, adding the links.
        function drawLines() {
            return function () {
                link
                    .attr("x1", function (d) {
                        return d.source.x;
                    })
                    .attr("y1", function (d) {
                        return d.source.y;
                    })
                    .attr("x2", function (d) {
                        return d.target.x;
                    })
                    .attr("y2", function (d) {
                        return d.target.y;
                    })
                    .style("stroke", function (d) {
                        let analysis = perc2color(d.RSSI, d.source.id, d.target.id);
                        return analysis.color;
                    })
                    .style("stroke-width", function (d) {
                        let analysis = perc2color(d.RSSI, d.source.id, d.target.id);
                        return `${10 * analysis.perc}px`;
                    })
                    .style("stroke-dasharray", ("3, 3"));
            }
        }

        // set the dimensions and margins of the graph
        var width = window.innerWidth;
        var height = window.innerHeight;

        // Features of the forces applied to the nodes:
        const simulation = d3.forceSimulation()
            .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
            .force("charge", d3.forceManyBody().strength(0.5)) // Nodes are attracted one each other of value is > 0
            .force("collide", d3.forceCollide().strength(.02).radius(60).iterations(1)) // Force that avoids circle overlapping

        // append the svg object to the body of the page
        const svg = d3.select("#my_dataviz")
            .append("svg")
            .attr("width", width)
            .attr("height", height)

        svg
            .append('svg:defs')
            .append('svg:marker')
            .attr('id', 'end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 8)
            .attr('markerWidth', 3)
            .attr('markerHeight', 3)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', '#000');

        // Initialize the links
        const link = svg.selectAll("line")
            .data(data.links)
            .join("line")
            .attr('tip', function (d) {
                console.log(d.source);
                return `${d.source} -> ${d.target} = ${d.RSSI}`;
            })
            .on('mousemove', function (e) {
                const data = d3.select(e.target).data()[0];
                const tip = document.getElementById("tool-tip");
                tip.innerText = e.target.getAttribute('tip');
                tip.style.left = e.clientX + 'px'
                tip.style.top = e.clientY + 'px';
                tip.classList.add("show");
            })
            .on('mouseout', function (e) {
                const tip = document.getElementById("tool-tip");
                tip.classList.remove("show");
            })
            .style("stroke", "#000");

        let node = svg
            .append('g')
            .attr('id', 'circles')
            .selectAll('g')
            .data(data.nodes, (d) => d.id)

        const g = node.enter().append('g');

        /*g.on('mouseover', 
        )
            .on('mouseout', hideDetail);*/

        g.append('circle')
            .attr("r", 30)
            .attr("stroke", "#69a2b2")
            .style("stroke-width", 1)
            .style("fill", "#69b000");

        g.append('text')
            .attr('x', 0)
            .attr('y', 50)
            .attr('class', 'value')
            .text((d) => d.name)
            .insert("rect")
            .style("fill", "yellow");

        node = g.merge(node); //important

        simulation
            .nodes(data.nodes)
            .on("tick", function () {
                node.attr('transform', (d) => {
                    return `translate(${d.x},${d.y})`
                });
            });

        simulation
            .force("link",
                d3.forceLink()
                    .id(function (d) { return d.id; })
                    .links(data.links)
            )
            .force("charge", d3.forceManyBody().strength(-8800))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .on("end", drawLines(link));
    })


    return (
        <>
            <div id="my_dataviz"></div>
            <div id="tool-tip"></div>
        </>
    )
}

export default Chart