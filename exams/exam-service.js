var exams = [
        {
            subject: 'Maths',
            title: 'Do times tables',
            date: '1995-12-17',
            checklist: [
                {name: 'exItem1', done:false},
                {name: 'exItem2', done:false},
                {name: 'exItem3', done:false}
            ],
            score: -1
        },
        {
            subject: 'English',
            title: 'Read To Kill A Mockingbird',
            date: '1995-12-18',
            checklist: [
                {name: 'exItem1', done:false},
                {name: 'exItem2', done:false},
                {name: 'exItem3', done:false}
            ],
            score: -1
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

export function addExam(aSubject, aDescription,aChecklist){
    exams.push({subject: aSubject, 
        description: aDescription,
        checklist: aChecklist, 
        done: false, 
        dueDate : '1998-07-06'})
}

export function getExamsBySubject(aSubject){
    return exams.filter(x => x.subject == aSubject)
}
