var exams = [
        {
            subject: 'Maths',
            title: 'Do times tables',
            date: '1995-12-17',
            checklist: [
                {item: 'exItem1', done:false},
                {item: 'exItem2', done:false},
                {item: 'exItem3', done:false}
            ]
        },
        {
            subject: 'English',
            title: 'Read To Kill A Mockingbird',
            date: '1995-12-18',
            checklist: [
                {item: 'exItem1', done:false},
                {item: 'exItem2', done:false},
                {item: 'exItem3', done:false}
            ]
        }
]


export function getExams(){
    sortByDate();
    return exams;
}

function sortByDate(){
    exams.sort(function compare(a,b){
        return new Date(a.date) - new Date(b.date);
    })
}

export function addHomework(aSubject, aDescription){
    exams.push({subject: aSubject, description: aDescription, done: false, dueDate : '1998-07-06'})
}
