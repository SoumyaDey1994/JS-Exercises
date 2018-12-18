import React from 'react';
import ReactDom from 'react-dom';
import NoticeBoard from './NoticeBoardTasks';

let cardsList = [
			{
			    id: 1,
			    title: "Write some code",
			    description: "Code based on the current CRs",
			    status: "To Do",
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
            {
                id: 2,
                title: "Read the proj reqt",
                description: "should read the whole reqt doc",
                status: "In progress",
                tasks: [{
                            id: 1,
                            name: "revise HLD",
                            done: false
                        }]
            },
            
            {
                id: 3,
                title: "Write some code",
                description: "Completed task",
                status: "Done",
                tasks: [
                        {
                            id: 1,
                            name: "called Ravi",
                            done: true
                        },
                        {
                            id: 2,
                            name: "replied to the emails",
                            done: false
                        }
                    ]
            },
   ];

ReactDom.render(
    <NoticeBoard cards={cardsList} />,
    document.getElementById('noticeBoardContent'));
