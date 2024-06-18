const formatState = (state: string) => {
    switch(state) {
        case 'ALL': return 'All Trainings';
        case 'COMPLETED': return 'Completed';
        case 'IN_PROGRESS': return 'In Progress';
        case 'PENDING': return 'Pending';
        default: return state;
    }
};

export { formatState }