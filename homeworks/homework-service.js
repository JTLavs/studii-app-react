var homeworks = [
        {
            subject: 'Maths',
            description: 'Do times tables',
            done: false,
            dueDate: '1995-12-17'
        },
        {
            subject: 'English',
            description: 'Read To Kill A Mockingbird',
            done: true,
            dueDate: '1995-12-18'
        }
]


export function getHomeworks(){
    sortByDate();
    return homeworks;
}

export function getStatus(done){
    if(done){
        return 'Complete'
    }
    return 'Incomplete'
}

function sortByDate(){
    homeworks.sort(function compare(a,b){
        return new Date(a.dueDate) - new Date(b.dueDate);
    })
}

export function addHomework(aSubject, aDescription){
    homeworks.push({subject: aSubject, description: aDescription, done: false, dueDate : '1998-07-06'})
}
