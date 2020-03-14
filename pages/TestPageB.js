import React from 'react'
import Nav from '../components/nav'

const TestPageB = ({ date }) => (
  <div>
    <Nav />
    <h1>THIS IS TEST PAGE B {date}</h1>
  </div>
)

export async function getServerSideProps() {
  return { props: { date: Date.now() } }
}

export default TestPageB
