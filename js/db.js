const API = 'https://look-graphql-backend.herokuapp.com/graphql'
const API_IMG = 'https://look-graphql-backend.herokuapp.com/'


const users_query = `
query{
    users{
    userId
    username
    contact
    }
}`


const foods_query = `
query {
    foods{
      foodId
      foodName
      foodImg
    }
}`

const orders_query = `
	query X ($userId: ID) {
  		orders (userId : $userId) {
  		  	count
  		  	food {
  		    	foodName
  		    	foodImg
  		  	}
  		}
	}
`
const addUser_query = `
	mutation ADD_USER($username: String! $contact: String!) {
  		addUser (
  		  	username: $username
  		  	contact: $contact
  		) {
  		  	status
  		  	message
  		}
	}
`

const addOrder_query = `
	mutation ADD_ORDER ($foodId: Int! $userId: Int! $count:Int!) {
  		addOrder(
  		  	foodId: $foodId,
  		  	userId: $userId
  		  	count: $count
  		) {
  		  	status
  		  	message
  		}
	}
`




async function getData(query, variables) {
    try {
        let response = await fetch(API, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query,
				variables
			})
		})
	    const { data } = await response.json()
	    return data

    } catch (error) {
        alert(error.message)
    }
}























// async function getOrders() {
//     let response = await fetch('https://look-graphql-backend.herokuapp.com/graphql', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             query:`
//                 query{
//                     orders{
//                         orderId
//                         food{
//                             foodId
//                             foodName
//                         }
//                     count
//                     }
//                 }
//             `
//         })
//     })
//     orders = await response.json();
//     // orders = orders.data.orders
//     console.log(orders);
//     renderOrders(orders)
// }
// getOrders()


// async function getUsers() {
//     let response = await fetch('https://look-graphql-backend.herokuapp.com/graphql', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             query:`
//                 query{
//                     users{
//                     userId
//                     username
//                     contact
//                     }
//                 }
//             `
//         })
//     })
//     users = await response.json()
//     users = users.data.users
//     console.log(users);
//     renderUsers(users)
// }
// getUsers()


// async function getFoods() {
//     let response = await fetch('https://look-graphql-backend.herokuapp.com/graphql', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             query:`
//                 query{
//                     foods{
//                     foodId
//                     foodName
//                     foodImg
//                     }
//                 }
//             `
//         })
//     })
//     foods = await response.json();
//     foods = foods.data.foods
//     console.log(foods);
//     renderFoods(foods)
// }
// getFoods()




// async function addUser(username, contact) {
//     let response = await fetch('https://look-graphql-backend.herokuapp.com/graphql', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             query:`
//             mutation A($u:String! $c:String!){
//                 addUser(username: $u, contact: $c){
//                   status
//                   message
//                   data
//                 }
//               }
//             `,
//             veriables:{
//                 u: username,
//                 c: contact
//             }
//         })
//     })
//     // console.log(await response.json());
// }



// async function addOrders(userId, foodId, count) {
//     let response = await fetch('https://look-graphql-backend.herokuapp.com/graphql', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             query:`
//             mutation B($foodId:Int! $userId:Int! $count:Int!){
//                 addOrder(foodId: $foodId, userId: $userId, count:$count){
//                   status
//                   message
//                   data
//                 }
//               }
//             `,
//             veriables:{
//                 foodId: +foodId,
//                 userId:+userId,
//                 count: +count
//               }
//         })
//     })
//     // console.log(await response.json());
// }

























































// users = JSON.parse(users) || [
// 	{ userId: 1, username: 'sobir', contact: '998941049914' },
// 	{ userId: 2, username: 'rahim', contact: '998941049914' },
// 	{ userId: 3, username: 'ilhom', contact: '998941049914' },
// ]

// foods = JSON.parse(foods) || [
// 	{ foodId: 1, foodName: 'Cola', foodImg: './img/cola.jpeg' },
// 	{ foodId: 2, foodName: 'Spinner', foodImg: './img/spinner.jpeg' },
// 	{ foodId: 3, foodName: 'Chiken Wings', foodImg: './img/chicken_wings.jpeg' },
// 	{ foodId: 4, foodName: 'Burger Cheese', foodImg: './img/burger_cheese.jpeg' },
// 	{ foodId: 5, foodName: 'Chicken Togora', foodImg: './img/chicken_togora.jpeg' },
// 	{ foodId: 6, foodName: 'Combo', foodImg: './img/combo.jpeg' },
// 	{ foodId: 7, foodName: 'Fanta', foodImg: './img/fanta.jpeg' },
// ]

// orders = JSON.parse(orders) || [
// 	{ userId: 1, foodId: 2, count: 1 },
// 	{ userId: 1, foodId: 1, count: 1 },
// 	{ userId: 1, foodId: 6, count: 2 },
// 	{ userId: 3, foodId: 5, count: 1 },
// ]

























