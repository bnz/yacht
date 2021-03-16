import React, { FC } from 'react'
import './AspectRatio.css'

export const AspectRatio: FC = ({ children }) => (
  <div className="aspect-ratio-container">
    <div className="aspect-ratio-inner">
      {children}
    </div>
  </div>
)
