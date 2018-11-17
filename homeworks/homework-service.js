var homeworks = [
        {
            subject: 'Maths',
            description: 'Do times tables',
            done: false,
            dueDate: Date('2017-01-01')
        },
        {
            subject: 'English',
            description: 'Read To Kill A Mockingbird',
            done: true,
            dueDate: Date('2017-01-02')
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
        return a.dueDate - b.dueDate;
    })
}
