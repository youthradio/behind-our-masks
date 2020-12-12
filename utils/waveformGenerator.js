import * as selection from 'd3-selection'
import * as d3Array from 'd3-array'
import * as d3Scale from 'd3-scale'
import * as d3Drag from 'd3-drag'

const d3 = Object.assign({}, selection, d3Array, d3Scale, d3Drag)

const generateWaveform = (audioData, options) => {
  const { margin, height, width, padding } = Object.assign(
    {
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      height: 300,
      width: 900,
      padding: 0.5,
    },
    options
  )
  const domain = d3.extent(audioData)

  const xScale = d3
    .scaleLinear()
    .domain([0, audioData.length - 1])
    .range([margin.left, width - margin.right])

  const yScale = d3
    .scaleLinear()
    .domain(domain)
    .range([margin.top, height - margin.bottom])
  const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const svg = d3.select(svgEl)

  svg
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', `0,0,${width},${height}`)
    .style('width', '100%')
    .style('height', 'auto')
    .style('display', 'block')

  svg
    .append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'none')

  const g = svg
    .append('g')
    .attr('transform', `translate(0, ${height / 2})`)
    .attr('fill', '#FFC146')

  const band = (width - margin.left - margin.right) / audioData.length
  g.selectAll('rect')
    .data(audioData)
    .join('rect')
    .attr('height', (d) => yScale(d))
    .attr('width', (d) => band * padding)
    .attr('x', (_, i) => xScale(i))
    .attr('y', (d) => -yScale(d) / 2)
    .attr('rx', band / 2)
    .attr('ry', band / 2)
  return svg.node().outerHTML
}

export default generateWaveform
