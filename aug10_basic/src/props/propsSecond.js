import React from 'react'
import PropTypes from 'prop-types'

// rafcp
const PropsSecond = props => {
  return (
    <>
        <h1>{props.name}</h1>
        <h1>{props.maker}</h1>
        <h1>{props.price}</h1>
    </>
  )
}

PropsSecond.propTypes = {
    name:PropTypes.string.isRequired, // ptsr : 글자, 필수
    maker:PropTypes.string, // pts : 글자
    price:PropTypes.number // ptn : 숫자
}

export default PropsSecond