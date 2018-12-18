

import React, { Component } from 'react';
import {render} from 'react-dom';

import NoticeBoard from './NoticeBoard';


let cardsList = [
            {
                id: 1,
                title: "Read the proj reqt",
                description: "should read the whole reqt doc",
                status: "in-progress",
                tasks: [{
                            id: 1,
                            name: "revise HLD",
                            done: false
                        }]
            },
            {
                id: 2,
                title: "Write some code",
                description: "Code based on the current CRs",
                status: "todo",
                tasks: [
                        {
                            id: 1,
                            name: "call Ravi",
                            done: true
                        },
                        {
                            id: 2,
                            name: "reply to the emails",
                            done: false
                        },
                        {
                            id: 3,
                            name: "read the bug reports",
                            done: false
                        }
                    ]
            },
   ];


render(<NoticeBoard cards={cardsList} />, document.getElementById('root'));


