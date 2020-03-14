import React from 'react'
import Nav from '../components/nav'

const TestPageA = ({ date }) => (
  <div>
    <Nav />
    <h1>THIS IS TEST PAGE A {date}</h1>
  </div>
)

export async function getServerSideProps() {
  return { props: { date: Date.now() } }
}

export default TestPageA
