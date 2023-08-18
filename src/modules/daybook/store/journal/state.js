
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sequi molestiae atque, veritatis, maiores ab vero quia accusamus dolore assumenda sint tenetur corporis quo officiis dolor fuga dolorem reiciendis? Expedita.',
            picture:null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sequi molestiae atque, veritatis, maiores ab vero quia accusamus dolore assumenda sint tenetur corporis quo officiis dolor fuga dolorem reiciendis? Expedita.',
            picture:null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sequi molestiae atque, veritatis, maiores ab vero quia accusamus dolore assumenda sint tenetur corporis quo officiis dolor fuga dolorem reiciendis? Expedita.',
            picture:null
        },
    ]
})