export const state = () => ({
    allPost: [
        {
          id: '1',
          title: 'Awesome Wooden Bacon',
          content: 'Quaerat et aliquam ut. Id eius dolorum. Ut magnam ratione placeat omnis nam libero nesciunt et. Necessitatibus facere dolor in impedit perspiciatis. Ea accusantium magnam quidem dolorem et perspiciatis voluptatum deleniti ea.'
        },
        {
          id: '2',
          title: 'Tasty Granite Soap',
          content: 'Rem nam dolores dolorum saepe. Assumenda architecto distinctio asperiores reprehenderit voluptatem aut quis. Temporibus dolores impedit nam consequatur et deserunt laudantium.'
        },
        {
          id: '3',
          title: 'Tasty Plastic Car',
          content: 'Quia sed error omnis qui voluptatem sit molestias. Recusandae sunt quis sint animi ducimus consequatur tenetur rerum. Eius voluptas et iste sunt consequatur consequatur quia eos sint. Omnis et et deleniti voluptas sed rem culpa. Magni sit sunt quaerat modi.'
        },
        {
          id: '4',
          title: 'Generic Metal Tuna',
          content: 'Nihil ad veritatis et dolores veritatis pariatur ab eaque. Harum nemo ipsa. Quidem veritatis ea omnis error. Reprehenderit aut et id. Omnis atque ducimus quos unde inventore officiis atque quod voluptates. Nihil rerum non.'
        },
    ]
});

export const getters = {
    enviarPost(state){
        return state.allPost
    }
};