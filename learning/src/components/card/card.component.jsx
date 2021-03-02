import { React } from 'react';
import './card.styles.css'

export const Card = props => (
    <div className = 'card-container'>
        <img alt = "monster" src = {`https://robohash.org/${props.people.id}?set=set2&size=180x180`} />
        <h1> {props.people.name} </h1>
        <h2> {props.people.email}</h2>
    </div>
)
