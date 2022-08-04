module.exports = {
    trialProgress: (trials) => {
        if(trials.length <= 1) return 'Start now!'
        let truthy = []
        for(i=0;i<trials.length;i++){
            if (trials[i].status === true){
                truthy.push(trials[i])
            }
        }
       if(truthy.length > 0) return 'Completed!'
       else return 'In Progress'

    }
}