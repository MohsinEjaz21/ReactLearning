import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'

export const Hero = ({ heroName }) => {
  if (heroName === 'Joker') {
    throw new Error("NOT OUR HERO")
  }
  return (
    <div>{heroName}</div>
  )
}

export const HeroImpl = () => {
  return (
    <>
      <ErrorBoundary>
        <Hero heroName={"Batman"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Superman"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Joker"} />
      </ErrorBoundary>
    </>
  )
}

