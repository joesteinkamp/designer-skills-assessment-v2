// @flow

import { tracks, milestones, categoryColorScale } from '../constants'
import React from 'react'
import type { MilestoneMap, TrackId, Milestone } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  trackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

class Track extends React.Component<Props> {
  render() {
    const track = tracks[this.props.trackId]
    const currentMilestoneId = this.props.milestoneByTrack[this.props.trackId]
    const currentMilestone = track.milestones[currentMilestoneId - 1]
    return (
      <div className="track">
        <style jsx>{`
          div.track {
            margin: 0 0 20px 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          h2 {
            margin: 0 0 10px 0;
          }
          p.track-description {
            margin-top: 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          table {
            border-spacing: 3px;
          }
          td {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
            border: 4px solid transparent;
          }
          ul {
            line-height: 1.5em;
          }
          .track-rating-scale {
            
          }
          .track-rating-scale td {
            width: 100px;
            line-height: 30px;
            border-radius: 50px;
          }
          .track-rating-scale td:hover {
            border: 4px solid #000;
          }
          .track-milestone-current {
            border: 4px solid #000;
          }
        `}</style>
        <h2>{track.displayName}</h2>
        <p className="track-description">{track.description}</p>
        <table className="track-rating-scale">
          <tbody>
            <tr>
            {milestones.slice().map((milestone) => {
              const isMet = milestone <= currentMilestoneId
              return (
                
                  <td className={(milestone === currentMilestoneId ? 'track-milestone-current' : '')} onClick={() => this.props.handleTrackMilestoneChangeFn(this.props.trackId, milestone)}
                      style={{background: isMet ? categoryColorScale(track.category) : undefined}} onMouseEnter={() => this.props.handleTrackMilestoneChangeFn(this.props.trackId, milestone)}>
                    {milestone}
                  </td>
                
              )
            })}
            </tr>
          </tbody>
        </table>
        <div style={{display: 'flex'}}>
          {currentMilestone ? (
            <div style={{flex: 1}}>
              <h3>{currentMilestone.summary}</h3>
              <h4>Signals:</h4>
              <ul>
                {currentMilestone.signals.map((signal, i) => (
                  <li key={i}>{signal}</li>
                ))}
              </ul>
              <h4>Examples:</h4>
              <ul>
                {currentMilestone.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default Track
