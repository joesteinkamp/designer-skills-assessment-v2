// @flow

import React from 'react'
import * as d3 from 'd3'
import { trackIds, milestones, tracks, categoryColorScale } from '../constants'
import type { TrackId, Milestone, MilestoneMap } from '../constants'

const width = 400
const arcMilestones = milestones.slice(1) // we'll draw the '0' milestone with a circle, not an arc.

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

class NightingaleChart extends React.Component<Props> {
  colorScale: any
  radiusScale: any
  arcFn: any

  constructor(props: *) {
    super(props)

    this.colorScale = d3.scaleSequential(d3.interpolateWarm)
      .domain([0, 5])

    this.radiusScale = d3.scaleBand()
      .domain(arcMilestones)
      .range([.15 * width, .45 * width])
      .paddingInner(0.1)

    this.arcFn = d3.arc()
      .innerRadius(milestone => this.radiusScale(milestone))
      .outerRadius(milestone => this.radiusScale(milestone) + this.radiusScale.bandwidth())
      .startAngle(- Math.PI / trackIds.length)
      .endAngle(Math.PI / trackIds.length)
      .padAngle(Math.PI / 200)
      .padRadius(.45 * width)
      .cornerRadius(2)
  }

  render() {
    const currentMilestoneId = this.props.milestoneByTrack[this.props.focusedTrackId]
    return (
      <figure>
        <style jsx>{`
          figure {
            margin: 0;
          }
          svg {
            width: ${width}px;
            height: ${width}px;
          }
          .track-milestone {
            fill: #eee;
            cursor: pointer;
          }
          .track-milestone-current, .track-milestone:hover {
            stroke: #000 !important;
            stroke-width: 4px !important;
            stroke-linejoin: round;
          }
          .track-current .track-milestone {
            stroke: rgba(255, 158, 44, .4);
            stroke-width: 3px;
            stroke-linejoin: round;
          }
          .track-name {
            display: none;
            font-size: 11px;
            fill: rgba(0, 0, 0, .72);
          }
          .track:hover .track-name {
            display: block;
          }
          .track-label {
            display: block;
            font-size: 13px;
          }
          .track:hover .track-label {
            display: none;
          }
        `}</style>
        
        <svg>
          <g transform={`translate(${width/2},${width/2}) rotate(0)`}>
            {trackIds.map((trackId, i) => {
              const isCurrentTrack = trackId == this.props.focusedTrackId
              return (
                <g key={trackId} transform={`rotate(${i * 360 / trackIds.length})`} className={'track ' + (isCurrentTrack ? 'track-current' : '')}>
                  
                  {arcMilestones.map((milestone) => {
                    const isCurrentMilestone = isCurrentTrack && milestone == currentMilestoneId
                    const isMet = this.props.milestoneByTrack[trackId] >= milestone || milestone == 0
                    return (
                      <path
                          key={milestone}
                          className={'track-milestone ' + (isMet ? 'is-met ' : ' ') + (isCurrentMilestone ? 'track-milestone-current' : '')}
                          onClick={() => this.props.handleTrackMilestoneChangeFn(trackId, milestone)}
                          d={this.arcFn(milestone)}
                          style={{fill: isMet ? categoryColorScale(tracks[trackId].category) : undefined}} />
                    )
                  })}
                  <circle
                      r="8"
                      cx="0"
                      cy="-50"
                      style={{fill: categoryColorScale(tracks[trackId].category)}}
                      className={"track-milestone " + (isCurrentTrack && !currentMilestoneId ? "track-milestone-current" : "")}
                      onClick={() => this.props.handleTrackMilestoneChangeFn(trackId, 0)} />
                  <text transform={`rotate(${i * 360 - (360 / trackIds.length * 3.44)})`} x="62" y="0" textLength="-10" className="track-name">{tracks[trackId].displayName}</text>
                  <text transform={`rotate(${i * 360 - (360 / trackIds.length * 3.44)})`} x="184" y="0" textLength="-20" className="track-label">{trackId}</text>
                </g>
            )})}
          </g>
        </svg>
      </figure>
    )
  }
}

export default NightingaleChart
