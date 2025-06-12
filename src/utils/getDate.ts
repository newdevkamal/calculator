export const getDate={
    today(){
        const now =new Date();
        const today=new Date(now)
        return today.toISOString().split('T')[0];
    },

    tomorrow() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1); // Add 1 day
        return tomorrow.toISOString().split('T')[0];
}
}