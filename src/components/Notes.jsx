import React from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

export const Notes = ({notes, onRemove, ErrorText}) => {
    return (
        <div>
            <TransitionGroup component="ul" className="list-group">
                {notes.map(note => {
                    return (
                        <CSSTransition key={note.id} classNames={'notes'} timeout={800}>
                            <li className="list-group-item note" >
                                <div>
                                    <strong>{note.title}</strong>
                                    <small>{note.date}</small>
                                </div>

                                <button type="button" className="btn btn-outline-danger btn-sm"
                                        onClick={() => onRemove(note.id)}>
                                    &times;
                                </button>
                            </li>
                        </CSSTransition>
                    );
                })}
            </TransitionGroup>




        </div>

    );
};
